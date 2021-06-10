import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../services/voiture.service';
import {Voiture} from '../models/voiture.model';
import {HttpErrorResponse, HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AUTH_TEKEN_KEY, AUTH_USER_NAME, AUTH_USER_TYPE} from '../state/CurrentUser';
import {LocationService} from '../services/location.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: Voiture[]|null;
  public deleteCar: Voiture;
  public reserveCar: Voiture;
  public typeCompte: string;
  public UserName: string;
  public KeyUser: number;
  v: Voiture;
  currentCar : any;
  editPhoto : boolean;
  selectedFiles: any;
  progress: number;
  currentFileUpload: any;
  currentTime: number;



  constructor(private voitureService: VoitureService, private router: Router, private locationService: LocationService) { }

  public totalRecords: number;
  public page: number =1;

  ngOnInit(): void {
    this.ListeVoiture();
    this.typeCompte=sessionStorage.getItem(AUTH_USER_TYPE);
    this.UserName=sessionStorage.getItem(AUTH_USER_NAME);
    this.KeyUser=+sessionStorage.getItem(AUTH_TEKEN_KEY);
    this.totalRecords=3;
  }

  onEditPhoto(p) {
    this.currentCar= this.v;
    this.editPhoto=true;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }

  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.voitureService.uploadPhotoCar(this.currentFileUpload, this.currentCar.id_voiture).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        //console.log(this.router.url);
        //this.getProducts(this.currentRequest);
        //this.refreshUpdatedProduct();
        this.currentTime=Date.now();
      }
    },err=>{
      alert("Problème de chargement");
    })



    this.selectedFiles = undefined
  }




  ListeVoiture(){
    this.voitureService.ListeVoiture().subscribe(
      (data: Voiture[])=>{
        this.cars=data;
        console.log(data)
      },
      (error :HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  onSelectCar(voiture: Voiture) {
    this.router.navigate(['/car-details',voiture.id_voiture]);
  }

  public onOpenModal(voiture: Voiture, mode: string): void {
    const container = document.getElementById('xxx');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addVoitureModalLabel');
    }

    if (mode === 'delete') {
      this.deleteCar = voiture;
      button.setAttribute('data-target', '#deleteCarModal');
    }
    if(mode === 'reserve'){
      this.reserveCar = voiture;
      button.setAttribute('data-target', '#reserveCarModal');
    }
    container.appendChild(button);
    button.click();
  }

  onAddEmloyee(addForm: NgForm) {


  }

  onAjouterVoiture(addForm: NgForm) {
      document.getElementById('add-voiture-form').click();
      this.voitureService.AjouterVoiture(addForm.value).subscribe(
        (response: Voiture) => {
          console.log(response);
          this.ListeVoiture();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }


  onSupprimeVoiture(voiture: Voiture) {
     this.voitureService.SupprimerVoiture(voiture).subscribe(
       (response) => {
         this.ListeVoiture();
       });
  }

  onReserveVoiture(reserveForm: NgForm) {
    document.getElementById('reserve-voiture-form').click();
    this.locationService.ajouterLocation(this.reserveCar.id_voiture,this.KeyUser,reserveForm.value['dated'],reserveForm.value['datef']).subscribe(
      data=>{
        this.ListeVoiture();
       reserveForm.reset();
      }
    )
  }
}
