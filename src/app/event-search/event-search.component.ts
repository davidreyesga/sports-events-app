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
  // Campos para ubicación y deporte
  searchTerm: string = '';
  enduranceActivities: string[] = [
    'Running',
    'Cycling',
    'Swimming',
    'Triathlon',
    'Duathlon',
    'Walking',
    'Mountain Biking',
  ];
  selectedActivity: string = '';

  // Campos para filtrar fechas
  startDate?: string; // "YYYY-MM-DD"
  endDate?: string;   // "YYYY-MM-DD"

  // Resultados
  events: any[] = [];

  constructor(private activeEventsService: ActiveEventsService) {}

  searchEvents() {
    console.log('Buscando eventos para ubicación:', this.searchTerm);
    console.log('Deporte:', this.selectedActivity);
    console.log('Fecha inicio:', this.startDate, 'Fecha fin:', this.endDate);

    this.activeEventsService
      .searchEvents(this.searchTerm, this.selectedActivity, this.startDate, this.endDate)
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
