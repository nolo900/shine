import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../fade_styles.scss';

class CustomerSearchResults extends Component {

    constructor(props){
        super(props);
        this.state = { };
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    // {new Date(customer.created_at).toDateString()}

    render() {

        const Fade = ({ children, ...props }) => (
            <CSSTransition
                {...props}
                timeout={2500}
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

                    <h3 className="pull-right"><small className="text-uppercase">Customer Lifetime Value</small> ${this.getRandomInt(20000)}</h3>
                    <h2 className="h3">
                        <Link to={`/customers/${customer.id}`}>{customer.first_name} {customer.last_name}</Link>
                    </h2>
                    <div>{ customer.email }</div>
                    <div><Link to={`/customers/${customer.id}`} className="btn btn-info pull-right">Details</Link></div>
                </li>
            </Fade>
        ));

        return (
            <section className="search-results">
                <header>
                    <h1 className="h3">Results { (this.props.customers.length == 100) ? '100+' : this.props.customers.length} </h1>
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
