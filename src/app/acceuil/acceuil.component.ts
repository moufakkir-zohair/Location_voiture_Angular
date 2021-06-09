import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  public typeCompte: string;
  public UserName: string;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
  }


}
