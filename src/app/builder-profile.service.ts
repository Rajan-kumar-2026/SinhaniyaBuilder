import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClientDetail } from './models/clientdetail';

@Injectable({
  providedIn: 'root'
})
export class BuilderProfileService {

  constructor(private hc: HttpClient) { }

  newBuildingProfile(p: ClientDetail): Observable<any> {
    return this.hc.post('http://localhost:57396/api/builderprofile/Create', p)
  }
}
