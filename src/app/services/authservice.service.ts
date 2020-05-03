import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private usersUrl = 'api/users';  // URL to web api
  userinput: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  validateUser(user) {
    this.userinput  = user;
  }

   /** GET heroes from the server */
   getUsers() {
    const myObj = { username: 'admin', password: 'admin' };
    window.sessionStorage.setItem('user', 'admin');
    localStorage.setItem('user', JSON.stringify(myObj));

        if (localStorage.length > 0) {
          if ( (this.http.get<User[]>(this.usersUrl)) &&
          (myObj.password === this.userinput.password && myObj.username === this.userinput.username) ) {
            localStorage.setItem('ISADMIN', 'true');
            return true;
         }
        } else {
          return false;
        }
  }

}
