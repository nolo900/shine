import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerSearchService {

    constructor(private http: HttpClient) {}

    searchCustomers(keywords:string):Observable<any> {
        return this.http
            .get(`/customers.json?keywords=${keywords}`);
    }

}