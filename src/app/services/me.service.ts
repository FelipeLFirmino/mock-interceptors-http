import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { OrganizationModel } from '../models/organization.model';


@Injectable({ providedIn: 'root' })
export class MeService {
  private readonly baseUrl = environment.apiBaseUrl;
 
  http = inject(HttpClient)

  //requisição user/me , serve para retornar o usuario atual 
  checkUser(){
    return this.http.get<Auth>(`${this.baseUrl}/users/me`,{
        headers:{'Content-Type':'application/json' }})
     }
  //requisição que lista as organizações que o usuario esta inserido
 getUserOrganizations(){
     return this.http.get<OrganizationModel[]>(`${this.baseUrl}/users/me/organizations`,{
        headers:{'Content-Type':'application/json' }})
     }
 

}
