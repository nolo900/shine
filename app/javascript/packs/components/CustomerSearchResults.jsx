import React, { Component } from 'react';

class CustomerSearchResults extends Component {

    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return (
            <section className="search-results">
                <header>
                    <h1 className="h3">Results</h1>
                </header>

                <ol className="list-group">
                    { this.props.customers.map((customer) => (
                        <li key={customer.id} className="list-group-item clearfix">
                            <h3 className="pull-right">
                                <small className="text-uppercase">Joined</small> {customer.created_at}</h3>
                            <h2 className="h3">
                                {customer.first_name} {customer.last_name}
                                <small>{customer.email}</small>
                            </h2>
                            <div>{ customer.username }</div>
                        </li>
                        )
                    )}
                </ol>

            </section>
        )
    }

}

export default CustomerSearchResults;
