import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Location} from '../models/location.model';
import {LocationState} from '../state/LocationState';
import {Equipement} from '../models/equipement.model';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-location',
  templateUrl: './liste-location.component.html',
  styleUrls: ['./liste-location.component.css']
})
export class ListeLocationComponent implements OnInit {

  public locations: LocationState[];
  public locationEffectuee: LocationState;
  public  locationAnnulee: LocationState;
  public typeCompte: string;
  public UserName: string;
  public KeyUser: number;
  constructor(private router: Router , private locationService: LocationService) { }

  ngOnInit(): void {
    this.ListeLocation();
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
    this.KeyUser=+sessionStorage.getItem(AUTH_TEKEN_KEY);

  }

  ListeLocation(){
    this.locationService.ListeLocation().subscribe(
      (data: LocationState[])=>{
        this.locations=data;
      },
      (error :HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  public onOpenModal(locationState: LocationState, mode: string): void {
    const container = document.getElementById('xxx');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'effectuee') {
      this.locationEffectuee=locationState;
      button.setAttribute('data-target', '#effectueeModalLabel');
    }

    if (mode === 'annulee') {
      this.locationAnnulee=locationState;
      button.setAttribute('data-target', '#annuleeModalLabel');
    }
    container.appendChild(button);
    button.click();
  }

  onEffectueeLocation() {
    this.locationService.EffectuerLocation(this.locationEffectuee.id_location).subscribe(
      data=>{
        this.ListeLocation();
      }
    );
  }

  onAnnulerLocation() {
    this.locationService.SupprimerLocation(this.locationAnnulee.id_location).subscribe(
      data=>{
        this.ListeLocation();
      }
    );
  }

  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_NAME);
    this.router.navigateByUrl("/acceuil");
  }

}
