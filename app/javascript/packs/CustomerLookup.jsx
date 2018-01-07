import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CustomerSearchForm from './components/CustomerSearchForm'

class CustomerLookup extends Component {

    constructor(){
        super();
        this.state = {
            name: 'CustomerLookup',
            customers: [
                {
                    firstName: 'Austin',
                    lastName: 'Miles'
                },
                {
                    firstName: 'Lauren',
                    lastName: 'Miles'
                }
            ]
        }
    }


    render() {
        return (
            <div className="CustomerLookup">
                <div>React Customer Lookup: {this.state.name}!</div>
            </div>
        );
    }

}

export default CustomerLookup;