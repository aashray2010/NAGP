import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  errorMessage : string = null;
  getuser: any;
  constructor(private auth: AuthserviceService,
    private router: Router) { }

  ngOnInit() {
  }
  login(logindetails) {
    this.user = {
      username : logindetails.value.user.username,
      password: logindetails.value.user.password
    };
     this.auth.validateUser(this.user);
    this.getusers();
  }
  getusers() {
    const userExists =  this.auth.getUsers();
    if (userExists) {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/latestNews']);
    } else {
      this.router.navigate(['/login']);
      this.errorMessage = "Access Only Allowed to admin";
    }
  }
}
