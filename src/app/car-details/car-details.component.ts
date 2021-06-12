import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Voiture} from '../models/voiture.model';
import {VoitureService} from '../services/voiture.service';
import {Commentaire} from '../models/commentaire.model';
import {CommentaireState} from '../state/CommentaireState';
import {Equipement} from '../models/equipement.model';
import {NgForm} from '@angular/forms';
import {CommentaireService} from '../services/commentaire.service';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public  id_voiture;
  public voiture: Voiture;
  public commentaires: CommentaireState[];
  public typeCompte: string;
  public UserName: string;
  public KeyUser: number;

  constructor(private route: ActivatedRoute,private router: Router, public voitureService: VoitureService, private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.id_voiture=parseInt(this.route.snapshot.paramMap.get('id'));
    this.ChercherVoiture();
    this.ListeCommentaire();
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
    this.KeyUser=+sessionStorage.getItem(AUTH_TEKEN_KEY);
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
        this.commentaires=data;
      }
    );
  }


  public onOpenModal( mode: string): void {
    const container = document.getElementById('xxx');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'description') {
      button.setAttribute('data-target', '#DescriptionModal');
    }

    container.appendChild(button);
    button.click();
  }

  onModifierVoiture(updateForm: NgForm) {
    document.getElementById('description-voiture-form').click();
    console.log(updateForm.value);
    this.voitureService.ModifierVoiture(this.voiture).subscribe(
      data=>{
        this.voiture=data;
        console.log(this.voiture);
      }
    )
  }

  onAjouterCommentaire(updateForm: NgForm) {
    document.getElementById('msg').onreset;
    console.log(updateForm.value);
      this.commentaireService.AjouterCommentaire({
        "id_voiture": this.voiture.id_voiture,
        "id_client": this.KeyUser,
        "commentaire": updateForm.value['commentaire'],
      }).subscribe(
        data=>{
         this.ListeCommentaire();
         updateForm.reset();
        });
  }


  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_NAME);
    this.router.navigateByUrl("/acceuil");
  }

}
