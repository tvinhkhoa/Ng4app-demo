import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidator } from '../shared/validation';

// import the service class 
import { InventionsService } from './inventions.service';
import { Invention } from './model/inventions.class';

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'],
  providers: [ InventionsService ]
})
export class InventionsComponent implements OnInit {

  idModel: number;
  nameModel: String;
  inventorModel: String;
  yearModel: String;
  inventions: Invention[];
  detailsModel : String;
  totalInventions: number;
  formName: FormGroup;

  constructor( 
    private inventionsService : InventionsService ,
    private router: Router,
    private fb: FormBuilder
  ) {

    // initialize model values to '' 
    this.idModel = 0;
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
    this.detailsModel = '';

    // consuming the service method getInventions() to fetch default inventions 
    this.inventions = this.inventionsService.getInventions();
    this.totalInventions = this.inventions.length;
  }

  ngOnInit() {
    this.formName = this.fb.group({
      numberInput: ['', [Validators.required, CustomValidator.numberValidator]]
    });
  }

  // add create Invention function for adding new inventions 
  createInvention(){

    // initialize a new invention using data coming from template [ using 2 way data binding ]
    let newInvention : Invention = {
      id: this.inventionsService.getId(),
      name: this.nameModel,
      inventor : this.inventorModel,
      year : this.yearModel
    };
    
    // push the newly created Invention object to inventions array 
    this.inventionsService.pushInvention( newInvention );

    this.inventions = this.inventionsService.getInventions();

    // set the model values to '' again 
    this.nameModel = this.yearModel = this.inventorModel = '';
  }

  details( id ) {
    this.router.navigate(['/inventions/details' , id ]);
  }
}
