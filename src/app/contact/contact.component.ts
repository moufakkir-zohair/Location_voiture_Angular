import { Component, OnInit } from '@angular/core';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public typeCompte: string;
  public UserName: string;
  public KeyUser: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
    this.KeyUser=+sessionStorage.getItem(AUTH_TEKEN_KEY);

  }

  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_NAME);
    this.router.navigateByUrl("/acceuil");
  }

}
