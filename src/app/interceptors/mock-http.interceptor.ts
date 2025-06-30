// src/app/interceptors/mock.interceptor.ts
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpResponse
} from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { authMockHandler } from './mock-me.interceptor';

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  if (!environment.mockEnabled) {
    // não mockar: segue para a rede
    return next(req);
  }
  console.debug('[MockInterceptor]', req.method, req.urlWithParams);
 
  //bloco de codigo que entra nos inteceptors de autenticação
  const authHandled = authMockHandler(req);
  if(authHandled){
    return authHandled
  }

 
  // Intercepta GET https://jsonplaceholder.typicode.com/users
  if (req.method === 'GET' && req.url.includes('/users')) {
    const fake = [
      { id: 1, name: 'Usuário Mock A' },
      { id: 2, name: 'Usuário Mock B' }
    ];
    return of(new HttpResponse({ status: 200, body: fake }));
  }

  // tudo o mais: faz a chamada real
  return next(req);
};
