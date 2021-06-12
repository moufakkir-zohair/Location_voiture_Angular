import { Component, OnInit } from '@angular/core';
import {EquipementService} from '../services/equipement.service';
import {Equipement} from '../models/equipement.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Voiture} from '../models/voiture.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-equipement',
  templateUrl: './liste-equipement.component.html',
  styleUrls: ['./liste-equipement.component.css']
})
export class ListeEquipementComponent implements OnInit {

  public equipements: Equipement[];
  public equipementDelete: Equipement;
  public equipementUpdate: Equipement;
  public typeCompte: string;
  public UserName: string;
  public KeyUser: number;
  constructor(private router: Router ,private equipementService: EquipementService) {
  }

  ngOnInit(): void {
    this.ListeEquipement();
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
    this.KeyUser=+sessionStorage.getItem(AUTH_TEKEN_KEY);

  }

  ListeEquipement() {
    this.equipementService.ListeEquipement().subscribe(
      (data: Equipement[]) => {
        this.equipements = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(equipement: Equipement, mode: string): void {
    const container = document.getElementById('xxx');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEquipementModalLabel');
    }

    if (mode === 'delete') {
      this.equipementDelete = equipement;

      button.setAttribute('data-target', '#deleteEquipementModal');
    }
    if (mode === 'update') {
      this.equipementUpdate = equipement;
      button.setAttribute('data-target', '#updateEquipementModal');
    }
    container.appendChild(button);
    button.click();
  }

  onAjouterEquipement(addForm: NgForm) {
    document.getElementById('add-equipement-form').click();
    this.equipementService.AjouterEquipement(addForm.value).subscribe(
      data => {
        this.ListeEquipement();
        addForm.reset();
      });
  }

  onSupprimeEquipement(equipementDelete: Equipement) {
    this.equipementService.SupprimerEquipement(equipementDelete).subscribe(
      data => {
        this.ListeEquipement();
      })
  }

  onModifierEquipement(updateForm: NgForm) {
    document.getElementById('update-equipement-form').click();
    this.equipementUpdate.nom=updateForm.value['nom'];
    this.equipementService.ModifierEquipement(this.equipementUpdate).subscribe(
      data => {
        this.ListeEquipement();
      });
  }

  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_NAME);
    this.router.navigateByUrl("/acceuil");
  }

}
