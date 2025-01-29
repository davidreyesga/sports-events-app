// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Buscar eventos</a> | 
      <a routerLink="/favorites" routerLinkActive="active">Mis favoritos</a> | 
      <a routerLink="/schedule" routerLinkActive="active">Calendario</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background-color: #3f51b5;
      padding: 1rem;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      font-weight: bold;
    }
    nav a.active {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
