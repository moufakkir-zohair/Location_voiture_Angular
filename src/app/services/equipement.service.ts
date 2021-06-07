import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Equipement} from '../models/equipement.model';

@Injectable({providedIn:"root"})

export class EquipementService{

  host = environment.host;

  constructor(private http: HttpClient) {
  }

  ListeEquipement():Observable<Equipement[]>{
    return this.http.get<Equipement[]>(this.host+"/equipements/liste");
  }


  AjouterEquipement(equipement:Equipement):Observable<Equipement>{
    return this.http.post<Equipement>(this.host+"/equipements/ajouter",equipement);
  }

  ModifierEquipement(equipement: Equipement):Observable<Equipement>{
    return this.http.put<Equipement>(this.host+"/equipements/modifier",equipement);
  }

  SupprimerEquipement(equipement:Equipement):Observable<void>{
    return this.http.delete<void>(this.host+"/equipements/supprimer/"+equipement.id_equipement);
  }

}




