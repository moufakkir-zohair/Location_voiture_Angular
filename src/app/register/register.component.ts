import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  compteFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.compteFormGroup=this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      tele:["",Validators.required],
      cin:["",Validators.required],
      email:["",Validators.required],
      mdp:["",Validators.required],
      cmdp:["",Validators.required],
    });
  }

  onSaveCompte() {
    this.submitted=true;
    if(this.compteFormGroup?.invalid) return;
    // this.productsService.save(this.productFormGroup?.value)
    //   .subscribe(data=>{
    //     alert("Success Saving product");
    //   });
  }

}
