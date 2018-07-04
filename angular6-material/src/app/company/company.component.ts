import { Component, OnInit } from '@angular/core';

import { Company } from './model/company.model';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanys().subscribe((data: Company[]) => {
          this.company = data;
      });
 }

}
