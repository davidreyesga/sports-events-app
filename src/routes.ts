// src/routes.ts
import { Routes } from '@angular/router';
import { EventSearchComponent } from './app/event-search/event-search.component';
import { FavoritesComponent } from './app/favorites/favorites.component';
import { ScheduleComponent } from './app/schedule/schedule.component'; // Importar ScheduleComponent

export const routes: Routes = [
  { path: '', component: EventSearchComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'schedule', component: ScheduleComponent }, // Nueva ruta para ScheduleComponent
  // Ruta para manejar paths inexistentes
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
