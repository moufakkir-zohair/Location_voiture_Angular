import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Voiture} from '../models/voiture.model';
import {VoitureService} from '../services/voiture.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public  id_voiture;
  public voiture: Voiture;
  constructor(private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.id_voiture=parseInt(this.route.snapshot.paramMap.get('id'));
    this.ChercherVoiture();

  }

  ChercherVoiture(){
    this.voitureService.ChercherVoiture(this.id_voiture).subscribe(
      data=>{
        this.voiture=data;
      });
  }
}
