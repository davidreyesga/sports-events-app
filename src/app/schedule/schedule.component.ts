// src/app/schedule/schedule.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// FullCalendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

// FavoritesService
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [], // Se llenará con los eventos favoritos
    dateClick: this.handleDateClick.bind(this),
  };

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // Obtener la lista de favoritos
    const favorites = this.favoritesService.getFavorites();

    // Transformar cada favorito al formato que FullCalendar requiere
    const transformedEvents = favorites.map(fav => ({
      title: fav.assetName,
      start: fav.activityStartDate,
    }));

    // Asignar los eventos transformados a FullCalendar
    this.calendarOptions.events = transformedEvents;
  }

  handleDateClick(arg: any): void {
    alert('Fecha clickeada: ' + arg.dateStr);
  }
}
