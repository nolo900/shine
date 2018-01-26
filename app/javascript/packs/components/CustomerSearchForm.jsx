import React, { Component } from 'react';

class CustomerSearchForm extends Component {

    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.searchCustomers(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <header>
                    <h1 className="h2">Quickly Search Customer Records Across Multiple Fields</h1>
                </header>
                <section>

                    <div className="input-group input-group-lg">
                        <label className="sr-only" htmlFor="keywords">Keywords</label>
                        <input
                            type="text"
                            name="keywords"
                            id="keywords"
                            placeholder="Search"
                            className="form-control input-lg"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                        <i className="glyphicon glyphicon-search form-control-feedback"></i>
                    </div>
                </section>
            </div>
        );
    }

}

export default CustomerSearchForm;
