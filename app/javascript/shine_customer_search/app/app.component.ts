import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'shine-customer-search',
    template: `
    <header>
        <h1 class="h2">Customer Search</h1>
    </header>
    <section>
        <div class="input-group input-group-lg">
            <label for="keywords"></label>
            <input #keywords
                   type="text"
                   id="keywords"
                   name="keywords"
                   placeholder="First Name, Last Name, Email" 
                   class="form-control input-lg"
                   >
            <span class="input-group-btn">
             <button (click)="searchCustomers(keywords.value)" class='btn btn-primary btn-lg' type='submit'><i class="glyphicon glyphicon-search"></i></button>
            </span>
        </div>
    </section>
    <section class="search-results">
      <header>
        <h1 class="h3">Results</h1>
      </header>
      <ol class="list-group">
          <li *ngFor="let customer of customers" class="list-group-item clearfix">
            <h3 class="pull-right">
              <small class="text-uppercase">Joined</small>date</h3>
            <h2 class="h3">
                {{customer.name}}
              <small>john_smith88</small>
            </h2>
            <div>john@smith.com</div>
           </li>
      </ol>
    </section>
`,
    providers: [CustomerService]
})

export class AppComponent {
    customers: Customer[];
    keywords = "";
    constructor(private customerService: CustomerService) {}

    searchCustomers(keywords): void {
        // this.customerService.searchCustomers(keywords).then(customers => this.customers = customers);
        this.customerService.getCustomers().then(customers => this.customers = customers);
    }
}