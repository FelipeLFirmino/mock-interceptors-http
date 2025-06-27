import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {  provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { mockInterceptor } from './interceptors/mock-http.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes),
       // registra o interceptor funcional **somente** em modo mock
    provideHttpClient(
      ...(environment.mockEnabled
        ? [ withInterceptors([ mockInterceptor ]) ]
        : [])
    )
  ]
};
