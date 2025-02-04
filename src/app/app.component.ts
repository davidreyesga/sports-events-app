// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <a
        mat-button
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >Buscar eventos</a
      >
      <a mat-button routerLink="/favorites" routerLinkActive="active"
        >Mis favoritos</a
      >
      <a mat-button routerLink="/schedule" routerLinkActive="active"
        >Calendario</a
      >
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      mat-toolbar {
        background-color: #5a7d9a;
        color: #f5f5f5;
      }
      a.active {
        text-decoration: underline;
      }
    `,
  ],
})
export class AppComponent {
  title = 'sports-events-app';
}
