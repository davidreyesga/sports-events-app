import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveEventsService {
  private apiKey = 'wbhesysk5csctzkmk5m7nz5s';
  private baseUrl = 'https://api.amp.active.com/v2/search';

  constructor(private http: HttpClient) {}

  /**
   * Busca eventos combinando:
   * - ubicación (near)
   * - deporte (topicName)
   * - rango de fechas (start_date)
   * - paginación (current_page, per_page)
   */
  searchEvents(
    location: string, 
    topic: string, 
    startDate?: string, 
    endDate?: string,
    currentPage: number = 1,
    perPage: number = 5
  ): Observable<any> {
    let url = `${this.baseUrl}?api_key=${this.apiKey}&category=event&radius=50`;

    if (location) {
      url += `&near=${encodeURIComponent(location)}`;
    }

    if (topic) {
      url += `&topicName=${encodeURIComponent(topic)}`;
    }

    // Fecha de inicio y/o fin
    if (startDate || endDate) {
      const rangeStart = startDate ? startDate : '';
      const rangeEnd = endDate ? endDate : '';
      url += `&start_date=${rangeStart}..${rangeEnd}`;
    }

    // Parámetros de paginación
    url += `&current_page=${currentPage}&per_page=${perPage}`;

    console.log('URL generada:', url);
    return this.http.get(url);
  }
}
