import React, { Component } from 'react';
import CustomerSearchForm from './CustomerSearchForm';
import CustomerSearchResults from './CustomerSearchResults';

class CustomerFinder extends Component {

    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/customers.json?keywords=aus',{credentials: "same-origin"})
            .then(response => {
                return response.json();
            }).then(data => {
            this.setState({customers: data.customers})
        });
    }

    searchCustomers(keywords) {
        if(keywords.length < 3){return}
        fetch(`/customers.json?keywords=${keywords}`,{credentials: "same-origin"})
            .then(response => {
                return response.json();
            }).then(data => {
            this.setState({customers: data.customers})
        });
    }

    render() {
        return (
            <div className="customer-finder">
                <CustomerSearchForm searchCustomers={this.searchCustomers.bind(this)} />
                <CustomerSearchResults customers={this.state.customers}/>
            </div>
        );
    }

}

export default CustomerFinder;