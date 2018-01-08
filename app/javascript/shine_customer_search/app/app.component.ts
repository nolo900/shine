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
            
            <!--<div class="form-group has-feedback">-->
                <label for="keywords"></label>
                <input 
                   bind-ngModel = 'keywords'
                   on-ngModelChange = "searchCustomers($event)"
                   type="text"
                   id="keywords"
                   name="keywords"
                   placeholder="Search" 
                   class="form-control input-lg"
                   autocomplete="off"
                   >
                 <i class="glyphicon glyphicon-search form-control-feedback"></i>
            <!--</div>-->
            
        </div>
    </section>
    <section class="search-results">
      <header>
        <h1 class="h3">Results</h1>
      </header>
      <ol class="list-group">
          <li *ngFor="let customer of customers" class="list-group-item clearfix">
            <h3 class="pull-right">
              <small class="text-uppercase">Joined </small>{{ customer.created_at | date : "yyyy-MM-dd" }}</h3>
            <h2 class="h3">
                {{customer.first_name}} {{customer.last_name}}
              <small>{{customer.username}}</small>
            </h2>
            <div>{{customer.email}}</div>
           </li>
      </ol>
    </section>
`,
    providers: [CustomerSearchService],
    styles:[
    `
        .input-group-lg{
            width: 100%;
        }
    `]
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