import { HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { environment } from '../../environments/environment'; 
import { OrganizationModel } from '../models/organization.model';
import { Auth } from '../models/auth.model';

export function authMockHandler(req: HttpRequest<any>) {
  //api da requisição
  const baseUrl = environment.apiBaseUrl;
  
  //token de sessão do usuario 
  const token = 'ewr3fv1e57cvge421c6e4ce2rce452'

  //usuario logado
   const currentUser:Auth = {
    name: 'João Silva',
    email: 'joao@teste.com'
  };

  //organizations mockadas 
  const mockOrganizations: OrganizationModel[] = [
    {type: 'organization', legalName: 'MSPA', slug: 'mspa', name: "MSPA"},
    { type: 'organization', legalName: 'Lacoste', slug: 'lacoste', name: "LAC" },
    { type: 'organization', legalName: 'NIKE', slug: 'nike', name: "NIKE" },
  ]
  
  //console das req e responses 
    console.debug('[MockInterceptor]', req.method, req.urlWithParams);  

  //retorna o usuario atual users/me
    if(req.method === 'GET' && req.url ==(`${baseUrl}/users/me`)){
      if(token === 'ewr3fv1e57cvge421c6e4ce2rce452'){
        return of(new HttpResponse({status: 200 , body: currentUser,headers:new HttpHeaders({'Content-Type': 'application/json'})}))
      }
      return throwError(() => new HttpErrorResponse({status:401, error:"Access Token is missing or invalid"}))
    }

    //retorna o usuario atual users/me/organizations
    if(req.method === 'GET' && req.url ==(`${baseUrl}/users/me/organizations`)){
       if(token === 'ewr3fv1e57cvge421c6e4ce2rce452'){
        return of(new HttpResponse({status: 200 ,headers:new HttpHeaders({'Content-Type': 'application/json'}), body: mockOrganizations }))
      }
      if(mockOrganizations.length === 0){
         return throwError(() => new HttpErrorResponse({
        status: 404,
        error: { message: 'User is not part of any organization' }
      }));
      }
        return throwError(() => new HttpErrorResponse({status:401, error:"Access Token is missing or invalid"}))
    }


  return null
}