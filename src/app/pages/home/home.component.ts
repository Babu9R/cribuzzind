import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { UpcomingMatchesComponent } from '../../components/upcoming-matches/upcoming-matches.component';
import { RecommendedBookmakersComponent } from '../../components/recommended-bookmakers/recommended-bookmakers.component';
import { TableOfContentsComponent } from '../../components/table-of-contents/table-of-contents.component';
import { AboutComponent } from '../../components/about/about.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CarouselComponent,
    UpcomingMatchesComponent,
    RecommendedBookmakersComponent,
    TableOfContentsComponent,
    AboutComponent,
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
