import { Component, OnInit } from '@angular/core';
import { Company } from './Company';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	company: Company[];

 	constructor(private companyervice: CompanyService) { }

  	ngOnInit() {
  		this.companyervice.getCompanys().subscribe((data: Company[]) => {
        		this.company = data;
        });
 	}
   deleteCompany(id) {
     this.companyervice.deleteCompany(id).subscribe(res => {
      console.log('Deleted');
    });
   }
}
