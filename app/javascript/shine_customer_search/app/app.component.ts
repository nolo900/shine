import { Component, OnInit     } from '@angular/core';
import { CustomerSearchService } from './customer-search.service';
import { Customer              } from './customer';

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
              <small class="text-uppercase">Joined</small>{{customer.created_at}}</h3>
            <h2 class="h3">
                {{customer.first_name}} {{customer.last_name}}
              <small>{{customer.username}}</small>
            </h2>
            <div>{{customer.email}}</div>
           </li>
      </ol>
    </section>
`,
    providers: [CustomerSearchService]
})

export class AppComponent {
    customers: Customer[] = [];
    keywords: string = '';
    constructor(private customerSearchService: CustomerSearchService) {}

    searchCustomers(keywords): void {
        this.customerSearchService
            .searchCustomers(keywords)
            .subscribe(response => this.customers = response.customers);
            //.subscribe(res => console.log(res));
    }

}