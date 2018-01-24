import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerFinder from './components/CustomerFinder';
import CustomerDetail from './components/CustomerDetail';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class CustomerContainer extends Component {

    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/customers/' component={CustomerFinder}/>
                    <Route exact path='/customers/detail' component={CustomerDetail}/>
                </Switch>
            </div>
        )
    }

}

export default CustomerContainer;