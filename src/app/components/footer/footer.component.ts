import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface FooterData {
  logo: {
    text: string;
    icon: string;
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
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  footerData: FooterData | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFooterData();
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
}
