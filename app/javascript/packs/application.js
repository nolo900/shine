/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import "./application.css";

import $ from 'jquery';
global.$ = $;
global.jQuery = $;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css"
import "signature_pad/dist/signature_pad.js";
import SignaturePad from 'signature_pad/dist/signature_pad'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import CustomerContainer from './CustomerContainer';

console.log('Webpacker loaded.');

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector("canvas");
    let signaturePad = new SignaturePad(canvas);
    let clearButton = document.getElementById('clearSig');
    fitToContainer(canvas);

    function fitToContainer(canvas){
        // Make it visually fill the positioned parent
        canvas.style.width ='100%';
        canvas.style.height='100%';
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    clearButton.addEventListener("click", function (event) {
        signaturePad.clear();
    });
});


document.addEventListener('DOMContentLoaded', () => {


    ReactDOM.render(
        <BrowserRouter>
            <ScrollToTop>
                <CustomerContainer />
            </ScrollToTop>
        </BrowserRouter>
        ,
        document.getElementById('root'),
    );
});

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
