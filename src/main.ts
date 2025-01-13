import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CommonModule), // Directivas como *ngIf, *ngFor
    importProvidersFrom(FormsModule), // [(ngModel)] para formularios básicos
    importProvidersFrom(ReactiveFormsModule), // Formulario reactivo
    importProvidersFrom(HttpClientModule), // Consumir APIs
  ],
});
