import {Component, OnInit} from '@angular/core';
import {Voiture} from './models/voiture.model';
import {VoitureService} from './services/voiture.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Equipement} from './models/equipement.model';
import {EquipementService} from './services/equipement.service';
import {CommentaireService} from './services/commentaire.service';
import {CompteService} from './services/compte.service';
import {Compte} from './models/compte.model';
import {Location} from './models/location.model';
import {LocationService} from './services/location.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AUTH_USER_NAME} from './state/CurrentUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Location-voiture';
  public voitures: Voiture[];
  public voiture: Voiture;
  public equipements: Equipement[];
  public compte: Compte[];
  public compteC: Compte;
  public locations: Location[];


  public user: string;
  public RouteActive : string;

  // constructor(private router: ActivatedRoute,private voitureService: VoitureService,private equipementService: EquipementService
  //             ,private commentaireService: CommentaireService,
  //             private compteService: CompteService,
  //             private locationService: LocationService) {
  //
  // }







  ngOnInit(): void {
   this.user= sessionStorage.getItem(AUTH_USER_NAME);


    // this.ModifierVoiture();
    // this.ListeVoiture();
    // this.SupprimerVoiture();
    // this.ListeEquipement();
    // this.SupprimerEquipement();
    // this.SupprimerCompte();
    // this.ListeLocation();
    // this.VerifierLocation();
    // this.EffectuerLocation();
    // this.VoitureLocation();
  }

  //
  // ChercherComptee(){
  //   this.compteService.ChercherCompte("zohair","123").subscribe(
  //     data=>{
  //       this.compteC=data;
  //     });
  // }
  //
  //
  //
  //  SupprimerCompte(){
  //   this.compteService.SupprimerCompte({
  //     "id_compte": 2,
  //     "cin": null,
  //     "prenom": "Imad-modifier",
  //     "email": null,
  //     "motpasse": null,
  //     "tele": null,
  //     "adresse": null,
  //     "nationalite": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  // AjouterCompteC(){
  //   this.compteService.AjouterCompteC({
  //     "cin": null,
  //     "prenom": "Imad",
  //     "email": null,
  //     "motpasse": null,
  //     "tele": null,
  //     "adresse": null,
  //     "nationalite": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  // ModifierCompteC(){
  //   this.compteService.ModifierCompteC({
  //     "id_compte": 4,
  //     "cin": null,
  //     "prenom": "Imad-modifier",
  //     "email": null,
  //     "motpasse": null,
  //     "tele": null,
  //     "adresse": null,
  //     "nationalite": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  // AjouterCompteM(){
  //   this.compteService.AjouterCompteM({
  //     "cin": null,
  //     "prenom": "hamid",
  //     "email": null,
  //     "motpasse": null,
  //     "tele": null,
  //     "adresse": null,
  //     "nationalite": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  //
  //
  // ListeVoiture(){
  //   this.voitureService.ListeVoiture().subscribe(
  //     (data: Voiture[])=>{
  //       this.voitures=data;
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  //
  // VoitureLocation(){
  //   this.locationService.VoitureLocation( {
  //     "id_location": 1,
  //     "date_debut": "2021-06-04T10:12:27.000+00:00",
  //     "date_fin": "2021-06-06T10:12:27.000+00:00",
  //     "acceptee": true,
  //     "effectuee": false
  //   }).subscribe(
  //     (data: Voiture)=>{
  //       this.voiture=data;
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  // EffectuerLocation(){
  //   this.locationService.EffectuerLocation( {
  //     "id_location": 1,
  //     "date_debut": "2021-06-04T10:12:27.000+00:00",
  //     "date_fin": "2021-06-06T10:12:27.000+00:00",
  //     "acceptee": true,
  //     "effectuee": false
  //   }).subscribe(
  //     (data: void)=>{
  //
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  // VerifierLocation(){
  //   this.locationService.VerifierLocation( {
  //     "id_voiture": 1,
  //     "nom": "FIRARI",
  //     "photo": null,
  //     "type": null,
  //     "matricule": null,
  //     "prix": 0,
  //     "modele": null,
  //     "annee_modele": 0,
  //     "marque": null,
  //     "description": null,
  //     "carburant": null,
  //     "boiteAvitesse": null,
  //     "puissanceFiscale": null
  //   }).subscribe(
  //     (data: number)=>{
  //          alert(data);
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  //
  //
  // AccepterLocation(){
  //   this.locationService.AccepterLocation(  {
  //     "id_location": 2,
  //     "date_debut": "2021-06-04T10:12:27.000+00:00",
  //     "date_fin": "2021-06-06T10:12:27.000+00:00",
  //     "acceptee": false,
  //     "effectuee": false
  //   }).subscribe(
  //     (data: void)=>{
  //
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  //
  // ListeLocation(){
  //   this.locationService.ListeLocation().subscribe(
  //     (data)=>{
  //       this.locations=data;
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  //
  //
  // ListeCompteC(){
  //   this.compteService.ListeCompteClient().subscribe(
  //     (data: Compte[])=>{
  //       this.compte=data;
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  //
  // ListeCompteM(){
  //   this.compteService.ListeCompteManager().subscribe(
  //     (data: Compte[])=>{
  //       this.compte=data;
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  //
  // ListeEquipement(){
  //   this.equipementService.ListeEquipement().subscribe(
  //     (data: Equipement[])=>{
  //       this.equipements=data;
  //     },
  //     (error :HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //
  // AjouterVoiture(){
  //   this.voitureService.AjouterVoiture({
  //       "nom": "cccccccccccc",
  //       "photo": null,
  //       "type": null,
  //       "matricule": null,
  //       "prix": 0,
  //       "modele": null,
  //       "annee_modele": 0,
  //       "marque": null,
  //       "description": null,
  //       "carburant": null,
  //       "boiteAvitesse": null,
  //       "puissanceFiscale": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //   });
  // }
  //
  //
  //
  //
  //
  // AjouterEquipement(){
  //   this.equipementService.AjouterEquipement({
  //        "nom": "cccccccccccc"
  //    }).subscribe(
  //      data=>{
  //        alert("ss");
  //    });
  // }
  //
  //
  // ModifierVoiture(){
  //   this.voitureService.ModifierVoiture({
  //     "id_voiture": 3,
  //     "nom": "DACIA-modifier",
  //     "photo": null,
  //     "type": null,
  //     "matricule": null,
  //     "prix": 0,
  //     "modele": null,
  //     "annee_modele": 0,
  //     "marque": null,
  //     "description": null,
  //     "carburant": null,
  //     "boiteAvitesse": null,
  //     "puissanceFiscale": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //   });
  // }
  //
  // ModifierEquipement(){
  //   this.equipementService.ModifierEquipement({
  //     "id_equipement": 4,
  //     "nom": "modifier-2"
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  //
  // SupprimerVoiture(){
  //   this.voitureService.SupprimerVoiture({
  //     "id_voiture": 3,
  //     "nom": "DACIA-modifier",
  //     "photo": null,
  //     "type": null,
  //     "matricule": null,
  //     "prix": 0,
  //     "modele": null,
  //     "annee_modele": 0,
  //     "marque": null,
  //     "description": null,
  //     "carburant": null,
  //     "boiteAvitesse": null,
  //     "puissanceFiscale": null
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     })
  // }
  //
  //
  // SupprimerEquipement(){
  //   this.equipementService.SupprimerEquipement({
  //     "id_equipement": 4,
  //     "nom": "modifier-2"
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     })
  // }
  //
  //
  // AjouterCommentaire(){
  //   this.commentaireService.AjouterCommentaire({
  //     "id_voiture": 1,
  //     "id_client": 2,
  //     "commentaire": "afeeen",
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  //
  // ModifierCommentaire(){
  //   this.commentaireService.ModifierCommentaire({
  //     "id_commentaire": 1,
  //     "commentaire": "ssssssssssssssssssssssss"
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     });
  // }
  //
  //
  // SupprimerCommentaire(){
  //   this.commentaireService.SupprimerCommentaire({
  //     "id_commentaire": 1,
  //      "commentaire": "ccccccc"
  //   }).subscribe(
  //     data=>{
  //       alert("ss");
  //     })
  // }

}
