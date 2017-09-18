import React, { Component } from 'react';
import Header from '../components/header.jsx'
import { Route, BrowserRouter, Switch  } from 'react-router-dom'
import {GspSimulator} from '../components/GspSimulator';
import {UserKyc} from '../components/UserKyc';
import UserShortForm from '../components/UserShortForm';
import {ShortForm} from '../containers/ShortForm'

class App extends Component {
  render() {
    return (
    <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {GspSimulator}/>
            <Route path = "/GspSimulator" component = {GspSimulator} />
            <Route path = "/UserKyc" component = {UserKyc} />
            <Route path = "/UserShortForm" component = {UserShortForm} />
          </Switch>
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
