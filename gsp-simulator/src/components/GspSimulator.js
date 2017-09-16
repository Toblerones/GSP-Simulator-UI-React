import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import logo from '../images/logo.svg';
import './GspSimulator.css';

export class GspSimulator extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div >
                    <Link to ={'/UserKyc'}  activeClassName="active">Go KycForm</Link>
                </div>
                <div >
                    <Link to ={'/UserShortForm'}  activeClassName="active">Go ShortForm</Link>
                </div>
            </div>
        );
    }
}
