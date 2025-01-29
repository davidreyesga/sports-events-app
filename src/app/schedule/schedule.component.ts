// src/app/schedule/schedule.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones de FullCalendar
import { FullCalendarModule } from '@fullcalendar/angular'; // Importar FullCalendarModule
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FullCalendarModule], // Añadir FullCalendarModule a los imports
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    // Aquí puedes añadir más opciones de configuración según tus necesidades
    events: [], // Inicialmente vacío, se llenará con los eventos favoritos
    dateClick: this.handleDateClick.bind(this), // Vincular el manejador de clics en fechas
  };

  constructor() {}

  ngOnInit(): void {
    // Aquí podrías cargar eventos iniciales si es necesario
  }

  /**
   * Manejador para el evento de clic en una fecha del calendario
   */
  handleDateClick(arg: any): void {
    alert('Fecha clickeada: ' + arg.dateStr);
  }
}
