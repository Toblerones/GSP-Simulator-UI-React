import React, { Component } from 'react';

export class UserShortForm extends Component {
    render() {
        return (
            <div >
                Customer Number <input type="text" name="customerNumber"/> <br/>
                Cam Level
                <select>
                    <option value="30">Cam 30</option>
                    <option value="40">Cam 40</option>
                </select>
                <br/>
                Target URL <input type="text" name="targetUrl"/> <br/>
            </div>
        );
    }
}
