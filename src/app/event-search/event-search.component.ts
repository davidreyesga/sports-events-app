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
  searchTerm: string = '';
  events: any[] = [];

  constructor(private activeEventsService: ActiveEventsService) {}

  searchEvents() {
    console.log('Buscando eventos para:', this.searchTerm);

    this.activeEventsService.searchEvents(this.searchTerm).subscribe({
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
