import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CompteService} from '../services/compte.service';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';
import {Router} from '@angular/router';
import {Compte} from '../models/compte.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private compteService: CompteService, private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/login'])
  }

  onVerifierCompte(form: NgForm) {
     this.compteService.VerifierCompte(form.value['email'],form.value['password']).subscribe(data=>{
       if(data==1){
         sessionStorage.setItem(AUTH_USER_TYPE,"CC");
       }else if(data==3){
         sessionStorage.setItem(AUTH_USER_TYPE,"CA");
       }
       this.onChercherClient(form.value['email'],form.value['password']);
       this.router.navigate(['/acceuil']);
     });
  }

  onChercherClient(email: string, password: string){
    this.compteService.ChercherCompte(email,password).subscribe(
      (data: Compte)=>{
        sessionStorage.setItem(AUTH_TEKEN_KEY,data.id_compte.toString());
        sessionStorage.setItem(AUTH_USER_NAME,data.nom);
        console.log(data.nom);
    });
  }

}
