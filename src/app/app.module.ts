import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CarsComponent } from './cars/cars.component';


const routes: Routes = [
  {path:"acceuil", component:AcceuilComponent},
  {path:"cars", component:CarsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
