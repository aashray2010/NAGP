import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsOfStateService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.covid19india.org/state_district_wise.json';
  getStatesdetails(): Observable<object> {
    return this.http.get(this.baseUrl);
  }
}
