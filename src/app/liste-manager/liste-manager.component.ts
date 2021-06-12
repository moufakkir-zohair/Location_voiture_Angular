import { Component, OnInit } from '@angular/core';
import {CompteService} from '../services/compte.service';
import {Compte} from '../models/compte.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Equipement} from '../models/equipement.model';
import {EquipementService} from '../services/equipement.service';
import {NgForm} from '@angular/forms';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-manager',
  templateUrl: './liste-manager.component.html',
  styleUrls: ['./liste-manager.component.css']
})
export class ListeManagerComponent implements OnInit {
  public comptes : Compte[];
  public compteDelete: Compte;
  public compteUpdate: Compte;
  public typeCompte: string;
  public UserName: string;
  public KeyUser: number;
  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(): void {
    this.ListeCompteM();
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
    this.KeyUser=+sessionStorage.getItem(AUTH_TEKEN_KEY);

  }

  ListeCompteM(){
    this.compteService.ListeCompteManager().subscribe(
      (data: Compte[])=>{
        this.comptes=data;
      },
      (error :HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }







  public onOpenModal(compte: Compte, mode: string): void {
    const container = document.getElementById('xxx');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCompteModalLabel');
    }

    if (mode === 'delete') {
      this.compteDelete = compte;
      button.setAttribute('data-target', '#deleteCompteModal');
    }
    if (mode === 'update') {
      this.compteUpdate = compte;
      button.setAttribute('data-target', '#updateCompteModal');
    }
    container.appendChild(button);
    button.click();
  }

  onAjouterCompteM(addForm: NgForm) {
    document.getElementById('add-compte-form').click();
    this.compteService.AjouterCompteM(addForm.value).subscribe(
      data => {
        this.ListeCompteM();
        addForm.reset();
      });
  }

  onSupprimeCompte(compteDelete: Compte) {
    this.compteService.SupprimerCompte(compteDelete).subscribe(
      data => {
        this.ListeCompteM();
      })
  }

  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_NAME);
    this.router.navigateByUrl("/acceuil");
  }

}
