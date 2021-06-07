import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Compte} from '../models/compte.model';
import {Voiture} from '../models/voiture.model';

@Injectable({providedIn:"root"})

export class CompteService{

  host = environment.host;

  constructor(private http: HttpClient) {
  }

  ListeCompteClient():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.host+"/comptes/listeCC");
  }


  ListeCompteManager():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.host+"/comptes/listeCM");
  }


  AjouterCompteC(compteC:Compte):Observable<Compte>{
    return this.http.post<Compte>(this.host+"/comptes/ajouterCC",compteC);
  }

  AjouterCompteM(compteM:Compte):Observable<Compte>{
    return this.http.post<Compte>(this.host+"/comptes/ajouterCM",compteM);
  }

  ModifierCompteC(compteC:Compte):Observable<Compte>{
    return this.http.put<Compte>(this.host+"/comptes/modifierCC",compteC);
  }


  ModifierCompteM(compteM:Compte):Observable<Compte>{
    return this.http.put<Compte>(this.host+"/comptes/modifierCM",compteM);
  }

  SupprimerCompte(compte:Compte):Observable<void>{
    return this.http.delete<void>(this.host+"/comptes/supprimer/"+compte.id_compte);
  }



  VerifierCompte(email: string,mdp: string):Observable<number>{
    return this.http.get<number>(this.host+"/comptes/verifier?email="+email+"&MDP="+mdp);
  }


  ChercherCompte(email: string,mdp: string):Observable<Compte>{
    return this.http.get<Compte>(this.host+"/comptes/chercher?email="+email+"&MDP="+mdp);
  }

  LocationCompte(compte: Compte):Observable<Location[]>{
    return this.http.get<Location[]>(this.host+"/comptes/locations/"+compte.id_compte);
  }

}




