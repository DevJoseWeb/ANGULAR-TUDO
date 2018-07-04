import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from '../../company/company.model';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }
  // Refatorar e concentrar em um arquivo separado.
  baseUrl13: string = 'http://localhost:8080/companys/products13';
  baseUrl14: string = 'http://localhost:8080/companys/products14';

  getCompanys () {
    return this.http.get<Company[]>(this.baseUrl13);
  }
  getCompanyById(id: number) {
    return this.http.get<Company>(this.baseUrl13 + '/' + id);
  }

  createCompany(company: Company) {
    return this.http.post(this.baseUrl13, company);
  }

  updateCompany(company: Company) {
    return this.http.put(this.baseUrl13 + '/' + company.id, company);
  }

  deleteCompany(id: number) {
    return this.http.delete(this.baseUrl13 + '/' + id);
  }

}
