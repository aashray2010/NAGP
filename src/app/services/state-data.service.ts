import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateDataService {

  constructor(private http: HttpClient) { }
  baseUrl1 = 'https://api.covid19india.org/data.json';

  getStatesData() {
    return this.http.get(this.baseUrl1);
  }
}
