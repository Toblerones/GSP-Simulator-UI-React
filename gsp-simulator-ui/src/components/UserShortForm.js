import React, { Component } from 'react';
import 'bootstrap-toggle/js/bootstrap-toggle';
import 'bootstrap-toggle/css/bootstrap-toggle.css';

export class UserShortForm extends Component {
    render() {
        return (
            <div >





                Customer Number <input type="text" name="customerNumber"/> <br/>
                Cam Level    
                <label className="checkbox"><input type="checkbox" data-toggle="toggle" data-on="30" data-off="40" data-onstyle="primary" data-offstyle="danger"/></label>

                <br/>
                Target URL <input type="text" name="targetUrl"/> <br/>


            </div>

        );
    }
}
