import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface AboutContent {
  title: string;
  sections: Section[];
  faqs: FAQ[];
}

interface Section {
  title: string;
  content: ContentItem[];
}

interface ContentItem {
  type: 'paragraph';
  text: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  aboutData: AboutContent | null = null;
  expandedFaqs: { [key: number]: boolean } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAboutData();
  }

  loadAboutData() {
    this.http.get<AboutContent>('assets/data/about.json').subscribe({
      next: (data) => {
        this.aboutData = data;
        console.log('About data loaded successfully:', this.aboutData);
      },
      error: (error) => {
        console.error('Error loading about data:', error);
      }
    });
  }

  toggleFaq(index: number) {
    this.expandedFaqs[index] = !this.expandedFaqs[index];
  }

  isFaqExpanded(index: number): boolean {
    return this.expandedFaqs[index] || false;
  }
}
