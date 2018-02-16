import React, { Component } from 'react';
import spinner from 'images/puff.svg';

class Spinner extends Component{
    render(){
        return(
            <div className="spinner">
                <img src={spinner} />
            </div>
        );
    }
}

export default Spinner;
