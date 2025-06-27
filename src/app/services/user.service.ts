// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Pega todos os usuários de /users se eu rodar o ambiente com a flag mock trara um resultado
  //mockado pelo interceptor se rodar o ambiente com a flag mock desativada, ele trara o resultado real da API
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
