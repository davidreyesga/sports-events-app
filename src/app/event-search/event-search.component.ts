// src/app/event-search/event-search.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // Para [(ngModel)]
import { DatePipe } from '@angular/common';     // Para | date
import { ActiveEventsService } from '../services/active-events.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-event-search',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
})
export class EventSearchComponent {
  // Filtros
  searchTerm: string = '';         // Ubicación
  selectedActivity: string = '';   // Deporte
  startDate?: string;              // Fecha inicio
  endDate?: string;                // Fecha fin

  // Lista de deportes
  enduranceActivities: string[] = [
    'Running',
    'Cycling',
    'Swimming',
    'Triathlon',
    'Duathlon',
    'Walking',
    'Mountain Biking',
  ];

  // Resultados
  events: any[] = [];

  // Paginación
  currentPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;
  perPage: number = 10;

  constructor(
    private activeEventsService: ActiveEventsService,
    private favoritesService: FavoritesService
  ) {}

  /**
   * Llamamos al servicio para buscar eventos, combinando
   * ubicación, deporte, fechas y paginación.
   */
  searchEvents(page: number = 1): void {
    this.currentPage = page;
    this.activeEventsService
      .searchEvents(
        this.searchTerm,
        this.selectedActivity,
        this.startDate,
        this.endDate,
        this.currentPage,
        this.perPage
      )
      .subscribe({
        next: (response) => {
          console.log('Respuesta de la API:', response);
          this.events = response.results || [];

          // Manejo de la paginación
          this.totalResults = response.total_results || 0;
          const itemsPerPage = response.items_per_page || this.perPage;
          this.totalPages = Math.ceil(this.totalResults / itemsPerPage);
        },
        error: (err) => {
          console.error('Error al buscar eventos:', err);
        },
      });
  }

  // Navegar a la página anterior
  prevPage(): void {
    if (this.currentPage > 1) {
      this.searchEvents(this.currentPage - 1);
    }
  }

  // Navegar a la página siguiente
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.searchEvents(this.currentPage + 1);
    }
  }

  /**
   * FAVORITOS
   */
  toggleFavorite(event: any): void {
    if (this.isFavorite(event.assetGuid)) {
      this.favoritesService.removeFavorite(event.assetGuid);
    } else {
      this.favoritesService.addFavorite(event);
    }
  }

  isFavorite(assetGuid: string): boolean {
    return this.favoritesService.isFavorite(assetGuid);
  }
}
