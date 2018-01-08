import React, { Component } from 'react';
import CustomerSearchForm from './components/CustomerSearchForm';
import CustomerSearchResults from './components/CustomerSearchResults';

class CustomerLookup extends Component {

    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/customers.json?keywords=pat',{credentials: "same-origin"})
            .then(response => {
                return response.json();
            }).then(data => {
            this.setState({customers: data.customers})
        });
    }

    searchCustomers(keywords) {
        fetch(`/customers.json?keywords=${keywords}`,{credentials: "same-origin"})
            .then(response => {
                return response.json();
            }).then(data => {
            this.setState({customers: data.customers})
        });
    }

    render() {
        return (
            <div className="CustomerLookup">
                <CustomerSearchForm search={this.searchCustomers} />
                <CustomerSearchResults customers={this.state.customers}/>
            </div>
        );
    }

}

export default CustomerLookup;