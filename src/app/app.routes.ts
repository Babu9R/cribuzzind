import { Routes } from '@angular/router';
import { TipsComponent } from './pages/tips/tips.component';
import { BookmakersComponent } from './pages/bookmakers/bookmakers.component';
import { OddsComponent } from './pages/odds/odds.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'bookmakers', component: BookmakersComponent },
  { path: 'odds', component: OddsComponent },
  { path: '**', redirectTo: '/home' }
];
