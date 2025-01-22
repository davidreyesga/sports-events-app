import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component'; // Tu componente raíz con <router-outlet> (opcional)
import { routes } from './routes'; // El array de rutas que creaste en src/routes.ts

bootstrapApplication(AppComponent, {
  providers: [
    // Importamos el HttpClientModule para hacer peticiones HTTP
    importProvidersFrom(HttpClientModule),
    // Inyectamos las rutas definidas en routes
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
