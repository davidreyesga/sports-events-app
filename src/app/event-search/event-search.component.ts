import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor, etc.
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { DatePipe } from '@angular/common'; // Para el pipe 'date'

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
  standalone: true,
  imports: [
    CommonModule, // Directivas como *ngIf y *ngFor
    FormsModule, // Para [(ngModel)]
    DatePipe, // Para el pipe 'date'
  ],
})
export class EventSearchComponent {
  searchTerm: string = '';
  events: any[] = [];

  searchEvents() {
    console.log('Buscando eventos para:', this.searchTerm);
    // Aquí puedes agregar la lógica para consumir la API
    this.events = [
      { name: 'Maratón de Ciudad', date: new Date() },
      { name: 'Triatlón Nacional', date: new Date() },
    ];
  }
}
