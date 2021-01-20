import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientDetail } from './models/clientdetail';
import { Register } from './models/register';

@Injectable({
  providedIn: 'root'
})
export class BuilderProfileService {

  register: Register = new Register();

  constructor(private hc: HttpClient) { }

  newBuildingProfile(p: ClientDetail): Observable<any> {
    return this.hc.post('http://localhost:57396/api/builderprofile/Create', p)
  }

  newRegister(email: string, password: string, confirmPassword: string): Observable<any> {
    return this.hc.post('http://localhost:44370/api/Account/Register', { email: email, password: password, confirmPassword: confirmPassword });
  }

  login(username: string, password: string): Observable<any> {
    const params = {
      grant_type: 'password',
      username: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = { headers: headers };
    const body: string = this.encodeParams(params);

    return this.hc.post('http://localhost:44370/token', body, options);
  }

  private encodeParams(params: any): string {

    let body = '';
    for (const key in params) {
      if (body.length) {
        body += '&';
      }
      body += key + '=';
      body += encodeURIComponent(params[key]);
    }

    return body;
  }
}
