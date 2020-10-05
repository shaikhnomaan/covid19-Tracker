import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import {  Ng2GoogleChartsModule, } from 'ng2-google-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent, 
    HomeComponent,
    CountriesComponent,
    DashboardCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  // Ng2GoogleChartsModule, 
    GoogleChartsModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
