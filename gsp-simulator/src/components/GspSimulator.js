import React, { Component } from 'react';
import {NavLink } from 'react-router-dom'
import logo from '../images/logo.svg';
import './GspSimulator.css';

export class GspSimulator extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>GSP Simulator</h2>
                </div>
                <div >
                    <NavLink to ={'/UserKyc'} activeClassName="active">Go KycForm</NavLink>
                </div>
                <div >
                    <NavLink to ={'/UserShortForm'}  activeClassName="active">Go ShortForm</NavLink>
                </div>
            </div>
        );
    }
}
