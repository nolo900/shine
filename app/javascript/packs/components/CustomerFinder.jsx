import React, { Component } from 'react';
import CustomerSearchForm from './CustomerSearchForm';
import CustomerSearchResults from './CustomerSearchResults';

class CustomerFinder extends Component {

    constructor(props){
        super(props);
        this.state = {
            customers: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('/customers.json',{credentials: "same-origin"})
            .then(response => {
                return response.json();
            }).then(data => {
                this.setState({customers: data.customers, isLoading: false})
        });
    }

    searchCustomers(keywords) {
        if(keywords.length < 2){return}
        this.setState({ isLoading: true });
        fetch(`/customers.json?keywords=${keywords}`,{credentials: "same-origin"})
            .then(response => {
                return response.json();
            }).then(data => {
            this.setState({customers: data.customers, isLoading:false})
        });
    }

    render() {
        return (
            <div className="customer-finder">
                <CustomerSearchForm searchCustomers={this.searchCustomers.bind(this)} />
                <CustomerSearchResults customers={this.state.customers} isLoading={this.state.isLoading} />
            </div>
        );
    }

}

export default CustomerFinder;