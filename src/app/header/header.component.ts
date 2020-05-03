import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })

export class HeaderComponent implements OnInit{
    isAdmin : boolean;
    constructor(private router: Router) {}
  
    ngOnInit() {
     this.isAdmin= this.isAdminvalue();
   }
    
    isAdminvalue() : boolean{
      this.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
      if(this.isAdmin == null)
      {
        this.isAdmin = false;
      }
      return this.isAdmin;
    }

    dashboard(){
        this.router.navigate(['/dashboard']);
        this.isAdmin = this.isAdminvalue();
     }

    latestNews(){
        this.router.navigate(['/latestNews']);
        this.isAdmin = this.isAdminvalue();
     }

    precaution(){
      this.router.navigate(['/precaution']);
      this.isAdmin = this.isAdminvalue();
     }
}