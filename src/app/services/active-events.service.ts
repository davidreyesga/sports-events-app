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
   * Busca eventos combinando ubicación (near), deporte (topicName) y fechas (start_date).
   */
  searchEvents(location: string, topic: string, startDate?: string, endDate?: string): Observable<any> {
    // Construimos la URL con los filtros necesarios.
    // category=event → Para obtener eventos.
    // near= → Ubicación
    // topicName= → Deporte
    // start_date → Fecha o rango de fechas
    // radius=50 → Para abarcar un radio de 50 millas (opcional)
    let url = `${this.baseUrl}?api_key=${this.apiKey}&category=event&radius=50`;

    if (location) {
      url += `&near=${encodeURIComponent(location)}`;
    }

    if (topic) {
      url += `&topicName=${encodeURIComponent(topic)}`;
    }

    // Si el usuario introduce fechas, construimos el rango para start_date
    // Puedes usar también end_date para filtrar la fecha de fin del evento, pero la documentación
    // generalmente usa start_date con rango (start_date=YYYY-MM-DD..YYYY-MM-DD).
    if (startDate || endDate) {
      // Formato: YYYY-MM-DD..YYYY-MM-DD
      //  - "startDate.." si solo hay fecha de inicio
      //  - "..endDate"  si solo hay fecha de fin
      //  - "startDate..endDate" si hay ambas
      const rangeStart = startDate ? startDate : '';
      const rangeEnd = endDate ? endDate : '';
      url += `&start_date=${rangeStart}..${rangeEnd}`;
    }

    console.log('URL generada:', url);
    return this.http.get(url);
  }
}
