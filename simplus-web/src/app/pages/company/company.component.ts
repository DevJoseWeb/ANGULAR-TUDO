import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {CompanyService} from '../company/service/company.service';
import {Company} from '../company/company.model';


@Component({
  selector: 'ngx-components',
  templateUrl: '../company/company/company.component.html',
  styleUrls: ['../company/company/company.component.scss']
})
export class CompanyComponent implements OnInit {

  companys: Company[];

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit() {

    this.companyService.getCompanys().subscribe( data => {
      this.companys = data;
    });
  }
/*
  deleteCompany(company: Company): void {
    this.companyService.deleteCompany(company.id)
      .subscribe( data => {
        this.companys = this.companys.filter(u => u !== company);
      })
  };

  editCompany(company: Company): void {
    localStorage.removeItem("editCompanyId");
    localStorage.setItem("editCompanyId", company.id.toString());
    this.router.navigate(['edit-company']);
  };

  addCompany(): void {
    this.router.navigate(['add-company']);
  };
*/
}
