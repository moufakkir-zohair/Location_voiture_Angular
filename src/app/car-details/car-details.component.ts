import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Voiture} from '../models/voiture.model';
import {VoitureService} from '../services/voiture.service';
import {Commentaire} from '../models/commentaire.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public  id_voiture;
  public voiture: Voiture;
  public commentaires: Commentaire[];
  constructor(private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.id_voiture=parseInt(this.route.snapshot.paramMap.get('id'));
    this.ChercherVoiture();
    this.ListeCommentaire();

  }

  ChercherVoiture(){
    this.voitureService.ChercherVoiture(this.id_voiture).subscribe(
      data=>{
        this.voiture=data;
      });
  }

  ListeCommentaire(){
    this.voitureService.ListeCommentaire(this.id_voiture).subscribe(
      data=>{
       console.log("sssssssss");
        this.commentaires=data;
      }
    );
  }
}
