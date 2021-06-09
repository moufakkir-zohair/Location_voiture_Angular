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
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { ListeLocationComponent } from './liste-location/liste-location.component';
import {LocationService} from './services/location.service';


const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'cars', component:CarsComponent},
  {path:'car-details/:id', component:CarDetailsComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-voiture', component:AddVoitureComponent},
  {path:'locations', component:ListeLocationComponent}
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
    AddVoitureComponent,
    ListeLocationComponent,
  ],
  imports: [
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
