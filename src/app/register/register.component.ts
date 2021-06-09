import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompteService} from '../services/compte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  compteFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,private compteService: CompteService ,private router: Router) { }

  ngOnInit(): void {
    this.compteFormGroup=this.fb.group({
      cin:["",Validators.required],
      nom:["",Validators.required],
      prenom:["",Validators.required],
      email:["",Validators.required],
      motpasse:["",Validators.required],
      tele:["",Validators.required],
      adresse:["",Validators.required],
    });
  }


  onSaveCompte() {
    this.submitted=true;
    if(this.compteFormGroup?.invalid) return;
    this.compteService.AjouterCompteC(this.compteFormGroup?.value)
      .subscribe(data=>{
        this.router.navigate(['/login'])
      });
  }

}
