import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'countries' , component : CountriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
