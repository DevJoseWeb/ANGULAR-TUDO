import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';
import { Company } from '../index/Company';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	company: any = {};
	angForm: FormGroup;
	constructor(private route: ActivatedRoute, 
				private router: Router, 
				private service: CompanyService, 
				private fb: FormBuilder) { 
		this.createForm();
	}

	createForm() {
    this.angForm = this.fb.group({
	     	name: ['', Validators.required ],
	      	price: ['', Validators.required ]
   		});
  	}

  	updateCompany(name, price) {
	    this.route.params.subscribe(params => {
	    this.service.updateCompany(name, price, params['id']);
	    this.router.navigate(['index']);
  		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
     		this.service.editCompany(params['id']).subscribe(res => {
        		this.company = res;
      	});
    });
	}

}
