import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 title = 'Add Company';
  angForm: FormGroup;

  constructor(private companyservice: CompanyService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  addCompany(name, price) {
      this.companyservice.addCompany(name, price);
  }

  ngOnInit() {
  }

}