// src/routes.ts
import { Routes } from '@angular/router';
import { EventSearchComponent } from './app/event-search/event-search.component';
import { FavoritesComponent } from './app/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: EventSearchComponent },
  { path: 'favorites', component: FavoritesComponent },
];
