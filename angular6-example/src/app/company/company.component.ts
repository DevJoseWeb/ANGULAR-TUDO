import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CompanyService} from '../service/company.service';
import {Company} from '../model/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companys: Company[];

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanys().subscribe( data => {
        this.companys = data;
      });
  }
}