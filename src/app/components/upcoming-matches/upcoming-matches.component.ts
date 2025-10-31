import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Match {
  id: number;
  timeRemaining: string;
  teams: string;
  date: string;
  time: string;
  matchNumber: string;
  series: string;
  predictions: Prediction[];
}

interface Prediction {
  bet: string;
  odds: string;
  bookmaker: string;
  logo: string;
  link: string;
}

@Component({
  selector: 'app-upcoming-matches', 
  imports: [CommonModule],
  templateUrl: './upcoming-matches.component.html',
  styleUrl: './upcoming-matches.component.scss'
})
export class UpcomingMatchesComponent implements OnInit {
  matches: Match[] = [];
  visibleMatches: Match[] = [];
  matchesPerPage = 3;
  currentPage = 1;
  hasMoreMatches = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMatchesData();
  }

  loadMatchesData() {
    this.http.get<{matches: Match[]}>('assets/data/upcoming-matches.json').subscribe({
      next: (data) => {
        this.matches = data.matches;
        this.updateVisibleMatches();
        console.log('Matches data loaded successfully:', this.matches);
      },
      error: (error) => {
        console.error('Error loading matches data:', error);
      }
    });
  }

  updateVisibleMatches() {
    const startIndex = 0;
    const endIndex = this.currentPage * this.matchesPerPage;
    this.visibleMatches = this.matches.slice(startIndex, endIndex);
    this.hasMoreMatches = endIndex < this.matches.length;
  }

  loadMoreMatches() {
    this.currentPage++;
    this.updateVisibleMatches();
  }
   openLink(link: string) {
    window.open(link, '_blank');
  }
}
