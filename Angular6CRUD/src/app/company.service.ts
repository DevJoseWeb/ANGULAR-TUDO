import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './components/index/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

	uri: String = 'http://localhost:8080/companys';

 	constructor(private http: HttpClient) { }

  	addCompany(name, price) {
	    const obj = {
	      name: name,
	      price: price
	    };
	    this
	    	.http
	    	.post(`${this.uri}/add`, obj)
	        .subscribe(res => 
	        	console.log('Done')
	        );
  	}

  	getCompanys() {
  		return this
            .http
            .get(`${this.uri}`);
    }

    editCompany(id) {
    	return this
            .http
            .get(`${this.uri}/edit/${id}`)
    	}

 	updateCompany(name, price, id) {

		const obj = {
			name: name,
			price: price
	    };
	    this
	    	.http
	    	.post(`${this.uri}/update/${id}`, obj)
	     	.subscribe(res => console.log('Done'));
  	}

  	deleteCompany(id) {
  		return this
            .http
            .get(`${this.uri}/delete/${id}`)
  	}
}
