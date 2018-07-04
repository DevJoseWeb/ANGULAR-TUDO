import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Company} from '../model/company.model';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'http://localhost:8080/companys';

  getCompanys() {
    return this.http.get<Company[]>(this.baseUrl);
  }

  getCompanyById(id: number) {
    return this.http.get<Company>(this.baseUrl + '/' + id);
  }

  createCompany(company: Company) {
    return this.http.post(this.baseUrl, company);
  }

  updateCompany(company: Company) {
    return this.http.put(this.baseUrl + '/' + company.id, company);
  }

  deleteCompany(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
