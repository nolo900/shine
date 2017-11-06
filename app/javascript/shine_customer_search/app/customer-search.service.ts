import { Injectable } from '@angular/core';
import { Http       } from '@angular/http';

@Injectable()
export class CustomerSearchService {

    constructor(private http: Http) {}

    searchCustomers(keywords:string) {
        return this.http
            .get(`/customers.json?keywords=${keywords}`);
    }

}