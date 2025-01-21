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
   * Busca eventos combinando ubicación y deporte.
   * @param location El valor que ingresa el usuario (por ejemplo: "Paris").
   * @param topic El deporte seleccionado (por ejemplo: "Running").
   */
  searchEvents(location: string, topic: string): Observable<any> {
    // Construimos la URL con los filtros necesarios.
    // category=event para que devuelva eventos.
    // near=location para filtrar por ubicación.
    // topicName=topic para filtrar por deporte.
    // radius=50 (opcional) para ampliar la búsqueda en 50 millas alrededor.
    let url = `${this.baseUrl}?api_key=${this.apiKey}&category=event`;

    // Si hay texto en "location", lo usamos en 'near'
    if (location) {
      url += `&near=${encodeURIComponent(location)}`;
    }

    // Si hay un deporte seleccionado, lo usamos en 'topicName'
    if (topic) {
      url += `&topicName=${encodeURIComponent(topic)}`;
    }

    // Agregamos un radio de búsqueda de 50 millas (opcional, pero recomendable)
    url += `&radius=50`;

    console.log('URL generada:', url);
    return this.http.get(url);
  }
}
