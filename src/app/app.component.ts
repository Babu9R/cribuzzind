import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cricbuzzind';
  contentData: any = null;
  isMenuOpen = false;
  currentTheme: 'light' | 'dark' = 'dark';
  private readonly document = inject(DOCUMENT);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initializeTheme();
    this.loadContentData();
  }

  initializeTheme() {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.currentTheme = savedTheme;
    } else {
      // First time load - default to dark theme
      this.currentTheme = 'dark';
      localStorage.setItem('theme', 'dark');
    }
    
    // Apply the theme
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    this.document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  loadContentData() {
    this.http.get<any>('assets/data/content.json').subscribe({
      next: (data) => {
        this.contentData = data;
        console.log('Content data loaded successfully:', this.contentData);
      },
      error: (error) => {
        console.error('Error loading content data:', error);
      }
    });
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onCloseMenu() {
    this.isMenuOpen = false;
  }
}
