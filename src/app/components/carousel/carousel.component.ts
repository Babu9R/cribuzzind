import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface CarouselItem {
  id: number;
  image: string;
  logo: string;
  title: string;
  promoCode: string | null;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  carouselItems: CarouselItem[] = [];
  currentSlide = 0;
  visibleSlides = 3;
  totalSlides = 0;
  copiedStates: { [key: number]: boolean } = {}; // Track copied state for each item

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updateVisibleSlides();
    this.loadCarouselData();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleSlides();
  }

  private updateVisibleSlides() {
    const w = window.innerWidth;
    if (w < 768) {
      this.visibleSlides = 1; // phones
    } else if (w < 1200) {
      this.visibleSlides = 2; // tablets / small laptops
    } else {
      this.visibleSlides = 3; // desktops
    }
    // clamp
    const maxStart = Math.max(0, this.totalSlides - this.visibleSlides);
    if (this.currentSlide > maxStart) this.currentSlide = maxStart;
  }

  loadCarouselData() {
    this.http.get<{carouselItems: CarouselItem[]}>('assets/data/carousel.json').subscribe({
      next: (data) => {
        this.carouselItems = data.carouselItems;
        this.totalSlides = this.carouselItems.length;
        this.updateVisibleSlides();
        console.log('Carousel data loaded successfully:', this.carouselItems);
      },
      error: (error) => {
        console.error('Error loading carousel data:', error);
      }
    });
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - this.visibleSlides) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = Math.max(0, this.totalSlides - this.visibleSlides);
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  getVisibleSlides() {
    return this.carouselItems.slice(this.currentSlide, this.currentSlide + this.visibleSlides);
  }

  getSlideIndicators() {
    const indicators = [];
    for (let i = 0; i <= this.totalSlides - this.visibleSlides; i++) {
      indicators.push(i);
    }
    return indicators;
  }

  copyPromoCode(promoCode: string, itemId: number) {
    navigator.clipboard.writeText(promoCode).then(() => {
      // Set copied state to true
      this.copiedStates[itemId] = true;
      
      // Reset the state after 2 seconds
      setTimeout(() => {
        this.copiedStates[itemId] = false;
      }, 2000);
      
      console.log('Promo code copied:', promoCode);
    });
  }
  openLink(link: string) {
    window.open(link, '_blank');
  }
}
