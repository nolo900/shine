import { Injectable } from '@angular/core';
import {CUSTOMERS} from "./mock-customers";
import {Customer} from './customer';

@Injectable()
export class CustomerService {
    getCustomers(): Promise<Customer[]> {
        return Promise.resolve(CUSTOMERS);
    }

}