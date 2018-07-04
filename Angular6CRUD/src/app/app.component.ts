import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CompanyService } from '../app/company.service';
import { Company } from '../app/components/index/Company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  game: any = {};
  title = 'app';

  constructor(private route: ActivatedRoute, private service: CompanyService) {}


  ngOnInit() {
		
  }
  
}
