import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  isAdmin : boolean;
  newsList : News[];
  userForm : FormGroup;
  news: News = new News();
  constructor(public fb: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.isAdmin =  this.isAdminvalue();
    this.newsList = JSON.parse(localStorage.getItem('newsListArray'))
     if(this.isAdmin)
     {
         this.userForm = this.fb.group({
         title: ["", [Validators.required, Validators.minLength(5)]],
         description: ["", Validators.required],
         summary: [{ value: "", disabled: false }, Validators.required],
         fullNews: ["",[Validators.required]]
   });
  }
}
  isAdminvalue() : boolean {
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    if(this.isAdmin == null)
    {
      this.isAdmin = false;
    }
    return this.isAdmin;
  }

  save(){
    if(this.newsList == null)
    {
      this.newsList = [];
    }
    this.news.title = this.userForm.get('title').value;
    this.news.description = this.userForm.get('description').value;
    this.news.summary = this.userForm.get('summary').value;
    this.news.fullNews = this.userForm.get('fullNews').value;
    this.newsList.push(this.news);
    localStorage.setItem('newsListArray',JSON.stringify(this.newsList));
    this.news = new News();
  }

  login() {
    this.router.navigate(['/login']);
    this.isAdmin = this.isAdminvalue();
  }
  logout() {
    //this.isAdmin = !this.isAdmin
    localStorage.removeItem('isAdmin');
    window.sessionStorage.removeItem('user');
    this.router.navigate(['dashboard']);
    this.isAdmin = this.isAdminvalue();
  }
}
