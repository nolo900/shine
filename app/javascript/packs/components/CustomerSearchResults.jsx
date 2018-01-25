import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class CustomerSearchResults extends Component {

    constructor(props){
        super(props);
        this.state = { in: false };
    }

    render() {

        const Fade = ({ children, ...props }) => (
            <CSSTransition
                {...props}
                timeout={500}
                classNames="fade"
            >
                {children}
            </CSSTransition>
        );


        const customers = this.props.customers.map((customer, i) => (
            <Fade key={i}>
                <li
                    key={customer.id}
                    className="list-group-item clearfix"
                    >
                    <h3 className="pull-right">
                        <small className="text-uppercase">Joined</small> {new Date(customer.created_at).toDateString()}</h3>
                    <h2 className="h3">
                        {customer.first_name} {customer.last_name}
                    </h2>
                    <div>{ customer.email }</div>
                    <div><Link to={`/customers/${customer.id}`} className="btn btn-info pull-right">Details</Link></div>
                </li>
            </Fade>
        ));

        return (
            <section className="search-results">
                <header>
                    <h1 className="h3">Results {this.props.customers.length}</h1>
                </header>

                <ol className="list-group">
                    <TransitionGroup>
                        {customers}
                    </TransitionGroup>
                </ol>

            </section>
        )
    }

}

export default CustomerSearchResults;
