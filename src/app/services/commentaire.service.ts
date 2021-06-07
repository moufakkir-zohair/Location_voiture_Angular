import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Commentaire} from '../models/commentaire.model';

@Injectable({providedIn:"root"})

export class CommentaireService{

  host = environment.host;

  constructor(private http: HttpClient) {
  }

  AjouterCommentaire(commentaire:Commentaire):Observable<Commentaire>{
    return this.http.post<Commentaire>(this.host+"/commentaires/ajouter?id_voiture="+commentaire.id_voiture+"&id_client="+commentaire.id_client+"&commentaire="+commentaire.commentaire,null);
  }

  ModifierCommentaire(commentaire:Commentaire):Observable<Commentaire>{
    return this.http.put<Commentaire>(this.host+"/commentaires/modifier?id_commentaire="+commentaire.id_commentaire+"&commentaire="+commentaire.commentaire,null);
  }

  SupprimerCommentaire(commentaire:Commentaire):Observable<void>{
    return this.http.delete<void>(this.host+"/commentaires/supprimer/"+commentaire.id_commentaire);
  }

}




