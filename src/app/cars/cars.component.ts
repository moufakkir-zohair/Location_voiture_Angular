import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../services/voiture.service';
import {Voiture} from '../models/voiture.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public voitures: Voiture[];

  constructor(private voitureService: VoitureService, private router: Router) { }

  public totalRecords: number;
  public page: number =1;

  ngOnInit(): void {
    this.ListeVoiture();
    this.totalRecords=this.voitures.length;
  }

  ListeVoiture(){
    this.voitureService.ListeVoiture().subscribe(
      (data: Voiture[])=>{
        this.voitures=data;
      },
      (error :HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  onSelectCar(voiture: Voiture) {
    this.router.navigate(['/car-details',voiture.id_voiture]);
  }
}
