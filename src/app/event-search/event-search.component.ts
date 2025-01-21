import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActiveEventsService } from '../services/active-events.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
})
export class EventSearchComponent {
  // El texto que ingresa el usuario (ej. "Paris")
  searchTerm: string = '';
  // Lista de deportes disponibles
  enduranceActivities: string[] = [
    'Running',
    'Cycling',
    'Swimming',
    'Triathlon',
    'Duathlon',
    'Walking',
    'Mountain Biking',
  ];
  // El deporte seleccionado
  selectedActivity: string = '';

  // Resultados
  events: any[] = [];

  constructor(private activeEventsService: ActiveEventsService) {}

  // ÚNICA BÚSQUEDA que combina ubicación y deporte
  searchEvents() {
    console.log('Buscando eventos para ubicación:', this.searchTerm, 'y deporte:', this.selectedActivity);

    this.activeEventsService
      .searchEvents(this.searchTerm, this.selectedActivity)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.events = response.results || [];
        },
        error: (err) => {
          console.error('Error al buscar eventos:', err);
        },
      });
  }
}
