import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Voiture} from '../models/voiture.model';
import {Location} from '../models/location.model';
import {Commentaire} from '../models/commentaire.model';
import {Equipement} from '../models/equipement.model';
import {CommentaireState} from '../state/CommentaireState';

@Injectable({providedIn:"root"})
export class VoitureService {

  host = environment.host;

  constructor(private http: HttpClient) {
  }


  uploadPhotoCar(file: File, idPhoto): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host+'/voitures/uploadPhoto/'+idPhoto, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    console.log(req);
    return this.http.request(req);
  }


  ListeVoiture(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.host + "/voitures/liste");
  }


  AjouterVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(this.host + "/voitures/ajouter", voiture);
  }

  ModifierVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(this.host + "/voitures/modifier", voiture);
  }

  SupprimerVoiture(voiture: Voiture): Observable<void> {
    return this.http.delete<void>(this.host + "/voitures/supprimer/" + voiture.id_voiture);
  }

  ListeLocation(voiture: Voiture): Observable<Location[]> {
    return this.http.get<Location[]>(this.host + "/voitures/locations/" + voiture.id_voiture);
  }

  AffecterEquipement(id_voiture: number, id_equipement: number): Observable<void> {
    return this.http.post<void>(this.host + "/voitures/locations/affecterEqui?id_voiture=" + id_voiture + "&id_equipement=" + id_equipement, null);
  }

  ListeCommentaire(id_voiture: number): Observable<CommentaireState[]> {
    return this.http.get<CommentaireState[]>(this.host + "/voitures/commentaires/" + id_voiture);
  }

  ListeEquipement(voiture: Voiture): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.host + "/voitures/equipements/" + voiture.id_voiture);
  }

  ChercherVoiture(id_voiture: number): Observable<Voiture> {
    return this.http.get<Voiture>(this.host + "/voitures/chercher/" + id_voiture);
  }

}
