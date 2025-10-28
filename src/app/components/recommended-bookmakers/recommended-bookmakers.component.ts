import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Bookmaker {
  id: number;
  rank: number;
  name: string;
  logo: string;
  title: string;
  offer: string;
  description: string;
  promoCode: string | null;
  visitLink: string;
  reviewLink: string;
}

@Component({
  selector: 'app-recommended-bookmakers',
  imports: [CommonModule],
  templateUrl: './recommended-bookmakers.component.html',
  styleUrl: './recommended-bookmakers.component.scss'
})
export class RecommendedBookmakersComponent implements OnInit {
  bookmakers: Bookmaker[] = [];
  visibleBookmakers: Bookmaker[] = [];
  bookmakersPerPage = 2;
  currentPage = 1;
  hasMoreBookmakers = false;
  copiedStates: { [key: number]: boolean } = {}; // Track copied state for each bookmaker

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBookmakersData();
  }

  loadBookmakersData() {
    this.http.get<{bookmakers: Bookmaker[]}>('assets/data/recommended-bookmakers.json').subscribe({
      next: (data) => {
        this.bookmakers = data.bookmakers;
        this.updateVisibleBookmakers();
        console.log('Bookmakers data loaded successfully:', this.bookmakers);
      },
      error: (error) => {
        console.error('Error loading bookmakers data:', error);
      }
    });
  }

  updateVisibleBookmakers() {
    const startIndex = 0;
    const endIndex = this.currentPage * this.bookmakersPerPage;
    this.visibleBookmakers = this.bookmakers.slice(startIndex, endIndex);
    this.hasMoreBookmakers = endIndex < this.bookmakers.length;
  }

  loadMoreBookmakers() {
    this.currentPage++;
    this.updateVisibleBookmakers();
  }

  copyPromoCode(promoCode: string, bookmakerId: number) {
    navigator.clipboard.writeText(promoCode).then(() => {
      // Set copied state to true
      this.copiedStates[bookmakerId] = true;
      
      // Reset the state after 2 seconds
      setTimeout(() => {
        this.copiedStates[bookmakerId] = false;
      }, 2000);
      
      console.log('Promo code copied:', promoCode);
    });
  }

  getStars(rank: number): number[] {
    // Return array of filled stars based on rank
    const starCount = Math.min(5, Math.max(1, rank));
    return Array(starCount).fill(0);
  }

  getEmptyStars(rank: number): number[] {
    // Return array of empty stars
    const emptyCount = Math.max(0, 5 - Math.min(5, Math.max(1, rank)));
    return Array(emptyCount).fill(0);
  }
    openLink(link: string) {
    window.open(link, '_blank');
  }
}
