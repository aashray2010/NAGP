import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

import { DetailsOfStateService } from './services/details-of-state.service';
import { StateDataService } from './services/state-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthserviceService } from './services/authservice.service';
import { NonAccessibleComponent } from './non-accessible/non-accessible.component';
import { HeaderComponent } from './header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrecautionsComponent,
    DashboardComponent,
    LatestNewsComponent,
    LoginComponent,
    NonAccessibleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [
    DetailsOfStateService,
    StateDataService,
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
