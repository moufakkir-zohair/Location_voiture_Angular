import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Equipement} from '../models/equipement.model';
import {Location} from '../models/location.model';
import {Voiture} from '../models/voiture.model';
import {LocationState} from '../state/LocationState';

@Injectable({providedIn:"root"})

export class LocationService{

  host = environment.host;

  constructor(private http: HttpClient) {
  }

  ListeLocation():Observable<LocationState[]>{
    return this.http.get<LocationState[]>(this.host+"/locations/liste");
  }

  VoitureLocation(location:Location):Observable<Voiture>{
    return this.http.get<Voiture>(this.host+"/locations/voiture/"+location.id_location);
  }


  EffectuerLocation(id_location:number):Observable<void>{
    return this.http.get<void>(this.host+"/locations/effectuer/"+id_location);
  }



  SupprimerLocation(id_location:number):Observable<void>{
    return this.http.get<void>(this.host+"/locations/supprimer/"+id_location);
  }



  VerifierLocation(voiture: Voiture):Observable<number>{
    return this.http.get<number>(this.host+"/locations/disponible/"+voiture.id_voiture);
  }


  AccepterLocation(location:Location):Observable<void>{
    return this.http.get<void>(this.host+"/locations/accepter/"+location.id_location);
  }

  ajouterLocation(id_voiture:number,id_client:number,dated:string,datef:string):Observable<void>{
    return this.http.get<void>(this.host+"/locations/ajouter?id_voiture="+id_voiture+"&id_client="+id_client+"&dated="+dated+"&datef="+datef);
  }

}




