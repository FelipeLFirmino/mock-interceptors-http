// src/app/services/user.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';


@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = environment.apiBaseUrl;

  http = inject(HttpClient)

  // Pega todos os usuários de /users se eu rodar o ambiente com a flag mock trara um resultado
  //mockado pelo interceptor se rodar o ambiente com a flag mock desativada, ele trara o resultado real da API
  getUsers(): Observable<Auth[]> {
    return this.http.get<Auth[]>(`${this.baseUrl}/users`);
  }
}
