
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Buscar eventos</a> | 
      <a routerLink="/favorites">Mis favoritos</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
