import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListeLocationComponent } from './liste-location/liste-location.component';
import { DataTablesModule } from "angular-datatables";
import { ListeEquipementComponent } from './liste-equipement/liste-equipement.component';
import { ListeManagerComponent } from './liste-manager/liste-manager.component';
import { ListeClientComponent } from './liste-client/liste-client.component';

const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'cars', component:CarsComponent},
  {path:'car-details/:id', component:CarDetailsComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'locations', component:ListeLocationComponent},
  {path:'equipements', component:ListeEquipementComponent},
  {path:'managers', component:ListeManagerComponent},
  {path:'clients', component:ListeClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    CarsComponent,
    CarDetailsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ListeLocationComponent,
    ListeEquipementComponent,
    ListeManagerComponent,
    ListeClientComponent,
  ],
  imports: [
    DataTablesModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
