import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CustomerDetail extends Component {

    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return (
            <section className="customer-detail">
                <Link to='/customers' className="btn btn-info">Back</Link>
                <hr/>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <article className="panel panel-info">
                                <header className="panel-heading">
                                    <h1 className="h3">
                                        Customer
                                    </h1>
                                </header>
                                <section className="panel-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="first-name">
                                                    First Name
                                                </label>
                                                <input type="text" className="form-control"
                                                       name="first-name" value="Pat" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="last-name">Last Name</label>
                                                <input type="text" className="form-control"
                                                       name="last-name" value="Jones" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="username">Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-addon">@</div>
                                                    <input type="text" className="form-control"
                                                           name="username" value="pat123" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input type="text" className="form-control"
                                               name="email" value="pattyj@somewhere.net" />
                                    </div>
                                </section>
                                <footer className="panel-footer">
                                    <label htmlFor="joined">Joined</label> 12/13/2014
                                </footer>
                            </article>
                            <article className="panel panel-default">
                                <header className="panel-heading">
                                    <h2 className="h4">
                                        Shipping Address
                                    </h2>
                                </header>
                                <section className="panel-body">
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="street-address">
                                            Street Address
                                        </label>
                                        <input type="text" className="form-control"
                                               name="street-address" value="123 Any St" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="city">City</label>
                                                <input type="text" className="form-control"
                                                       name="city" value="Washington" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="state">State</label>
                                                <input type="text" className="form-control"
                                                       name="state" value="DC" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="zip">Zip</label>
                                                <input type="text" className="form-control"
                                                       name="zip" value="20001" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </div>
                        <div className="col-md-6">
                            <article className="panel panel-default">
                                <header className="panel-heading">
                                    <h2 className="h4">
                                        Billing Info
                                    </h2>
                                </header>
                                <section className="panel-body">
                                    <article>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="h4">
                                                    ****-****-****-1234
                                                    <span className="label label-success">VISA</span>
                                                </p>
                                                <p className="h5">
                                                    <label>Expires:</label> 04/19
                                                </p>
                                            </div>
                                            <div className="col-md-5 text-right">
                                                <button className="btn btn-lg btn-default">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                    <hr />
                                        <article className="well well-sm">
                                            <header>
                                                <h1 className="h5">
                                                    Billing Address
                                                    <small>
                                                        <input type="checkbox" /> Same as shipping?
                                                    </small>
                                                </h1>
                                            </header>
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="street-address">
                                                    Street Address
                                                </label>
                                                <input type="text" className="form-control"
                                                       name="street-address" value="123 Any St" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="city">City</label>
                                                        <input type="text" className="form-control"
                                                               name="city" value="Washington" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="state">State</label>
                                                        <input type="text" className="form-control"
                                                               name="state" value="DC" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="zip">Zip</label>
                                                        <input type="text" className="form-control"
                                                               name="zip" value="20001" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                </section>
                            </article>
                        </div>
                    </div>
                </form>

            </section>
        )
    }

}

export default CustomerDetail;
