import { Routes } from '@angular/router';
import { TipsComponent } from './pages/tips/tips.component';
import { BookmakersComponent } from './pages/bookmakers/bookmakers.component';
import { OddsComponent } from './pages/odds/odds.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
  { path: 'tips', component: TipsComponent },
  { path: 'bookmakers', component: BookmakersComponent },
  { path: 'odds', component: OddsComponent },
  { path: '**', redirectTo: '/home' }
];
