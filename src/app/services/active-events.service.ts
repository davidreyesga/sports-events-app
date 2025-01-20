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

  searchEvents(query: string): Observable<any> {
    const url = `${this.baseUrl}?query=${query}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
