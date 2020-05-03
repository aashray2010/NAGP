import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LoginComponent } from './login/login.component';
import { NonAccessibleComponent } from './non-accessible/non-accessible.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'latestNews', component: LatestNewsComponent },
  { path: 'precautions', component: PrecautionsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'non-access', component: NonAccessibleComponent},
  { path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
