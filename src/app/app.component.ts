import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UpcomingMatchesComponent } from './components/upcoming-matches/upcoming-matches.component';
import { RecommendedBookmakersComponent } from './components/recommended-bookmakers/recommended-bookmakers.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { AboutComponent } from './components/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MenuComponent,
    CarouselComponent,
    UpcomingMatchesComponent,
    RecommendedBookmakersComponent,
    TableOfContentsComponent,
    AboutComponent,
    SidebarComponent,
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadContentData();
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
