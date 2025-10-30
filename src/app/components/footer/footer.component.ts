import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface FooterData {
  logo: {
    text: string;
    icon: string;
    image: string;
  };
  socialMedia: SocialMedia[];
  navigationSections: NavigationSection[];
  disclaimer: string[];
  regulatoryBadges: RegulatoryBadge[];
  copyright: string;
}

interface SocialMedia {
  name: string;
  icon: string;
  link: string;
}

interface NavigationSection {
  title: string;
  links: string[];
}

interface RegulatoryBadge {
  name: string;
  image: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  footerData: FooterData | null = null;
  @Output() toggleMenu = new EventEmitter<void>();
  activeIndex = 2; // default to Home (center)

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadFooterData();
    // Update active index on route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveIndex(event.urlAfterRedirects);
      }
    });
    // Initial calculation
    this.updateActiveIndex(this.router.url);
  }

  private updateActiveIndex(url: string) {
    // Order: Tips(0) | Bookmakers(1) | Home(2) | Odds(3) | Menu(4)
    if (url.startsWith('/tips')) {
      this.activeIndex = 0;
    } else if (url.startsWith('/bookmakers')) {
      this.activeIndex = 1;
    } else if (url.startsWith('/odds')) {
      this.activeIndex = 3;
    } else {
      this.activeIndex = 2; // home or others default center
    }
  }

  loadFooterData() {
    this.http.get<{footer: FooterData}>('assets/data/footer.json').subscribe({
      next: (data) => {
        this.footerData = data.footer;
        console.log('Footer data loaded successfully:', this.footerData);
      },
      error: (error) => {
        console.error('Error loading footer data:', error);
      }
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onToggleMenu() {
    this.toggleMenu.emit();
  }
}
