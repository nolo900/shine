import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class CustomerDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            customer: {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                username: ''
            },
            uploadedFileURL: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.readFile = this.readFile.bind(this);
        this.notifySuccess = this.notifySuccess.bind(this);
    }

    componentDidMount(props) {
        console.log(this.props.match.params.id);
        fetch(`/api/customers/${this.props.match.params.id}.json`,{credentials: "same-origin"})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({customer: json});
        });
    }

    notifySuccess = () => toast.success("User Details Saved!");
    notifyFailure = () => toast("Whoops, try again!");

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            customer: {
                ...this.state.customer,
                [name]: value
            }
        });
        console.log(this.state);
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();

        fetch(`/api/customers/${this.props.match.params.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(this.state.customer),
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(
                (response) => {
                    console.log('Success:', response);
                    this.notifySuccess();
                }
            );

    }

    readFile(event){
        console.log(event.target.files);
        let reader = new FileReader();
        reader.onload = function (e) {
            let preview = document.getElementById('img-preview');
            preview.setAttribute('src', e.target.result);
            preview.setAttribute('width',(window.screen.width/2).toString());
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    render() {
        return (
            <section className="customer-detail">
                <ToastContainer />
                <Link to='/customers' className="btn btn-info">Back</Link>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <article className="panel panel-default">
                                <header className="panel-heading">
                                    <h1 className="h3">
                                        Customer
                                    </h1>
                                </header>
                                <section className="panel-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="first-name">First Name</label>
                                                <input type="text"
                                                       className="form-control"
                                                       name="first_name"
                                                       value={this.state.customer.first_name}
                                                       onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="last-name">Last Name</label>
                                                <input type="text"
                                                       className="form-control"
                                                       name="last_name"
                                                       value={this.state.customer.last_name}
                                                       onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="username">Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-addon">@</div>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="username"
                                                           value={this.state.customer.username}
                                                           onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input type="text"
                                               className="form-control"
                                               name="email"
                                               value={this.state.customer.email}
                                               onChange={this.handleInputChange} />
                                    </div>
                                </section>
                                <footer className="panel-footer">
                                    <label htmlFor="joined">Joined</label>  {new Date(this.state.customer.created_at).toDateString()}
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
                                               name="street-address" placeholder="123 Any St" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="city">City</label>
                                                <input type="text" className="form-control"
                                                       name="city" placeholder="Washington" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="state">State</label>
                                                <input type="text" className="form-control"
                                                       name="state" placeholder="DC" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="zip">Zip</label>
                                                <input type="text" className="form-control"
                                                       name="zip" placeholder="20001" />
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
                                                       name="street-address" placeholder="123 Any St" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="city">City</label>
                                                        <input type="text" className="form-control"
                                                               name="city" placeholder="Washington" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="state">State</label>
                                                        <input type="text" className="form-control"
                                                               name="state" placeholder="DC" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="zip">Zip</label>
                                                        <input type="text" className="form-control"
                                                               name="zip" placeholder="20001" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                </section>
                            </article>
                        </div>
                    </div>
                    <hr/>
                        <div className="row text-center">
                            <input type="file"
                                   accept="image/*"
                                   id="selfie"
                                   name="selfie"
                                   capture="camera"
                                   className="inputfile"
                                   onChange={(event)=> {
                                       this.readFile(event)
                                   }}
                            />
                            <label htmlFor="selfie">Upload Image</label>
                        </div>
                        <div className="text-center">
                            <img className="text-center" id="img-preview" src=""  />
                        </div>
                    <hr/>
                    <input type="submit" value="Submit" className="btn btn-block btn-success form-submit-btn" />
                </form>

            </section>
        )
    }

}

export default CustomerDetail;
