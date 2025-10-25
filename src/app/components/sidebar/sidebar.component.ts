import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface SidebarData {
  recommendedBookmakers: RecommendedBookmakers;
  communityCard: CommunityCard;
  ongoingTournaments: OngoingTournaments;
  signUpCard: SignUpCard;
}

interface RecommendedBookmakers {
  title: string;
  seeAllLink: string;
  bookmakers: Bookmaker[];
}

interface Bookmaker {
  rank: number;
  name: string;
  logo: string;
  offer: string;
  promoCode: string | null;
  visitLink: string;
}

interface CommunityCard {
  title: string;
  description: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

interface OngoingTournaments {
  title: string;
  tournaments: Tournament[];
}

interface Tournament {
  name: string;
  dateRange: string;
  link: string;
}

interface SignUpCard {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  sidebarData: SidebarData | null = null;
  copiedStates: { [key: number]: boolean } = {}; // Track copied state for each bookmaker

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSidebarData();
  }

  loadSidebarData() {
    this.http.get<SidebarData>('assets/data/sidebar.json').subscribe({
      next: (data) => {
        this.sidebarData = data;
        console.log('Sidebar data loaded successfully:', this.sidebarData);
      },
      error: (error) => {
        console.error('Error loading sidebar data:', error);
      }
    });
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

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
