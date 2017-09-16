import React, { Component } from 'react';
import {Toggle} from './Toggle';
require('./UserShortForm.css')

export class UserShortForm extends Component {

    render() {

        return (
            <div >
                <input type="text" name="cin" className="question" id="nme" required autoComplete="off" />
                <label htmlFor="nme"><span>Customer Number</span></label>
                <input type="text" name="tUrl" className="question" id="msg" required autoComplete="off"/>
                <label htmlFor="msg"><span>Target Url</span></label>

                <Toggle activeLabel={"CAM 40"} deactiveLabel={"CAM 30"} activeColor={"#17cae6"} deactiveColor={"#17cae6"} />

                <input
                    type="button"
                    value="Send"
                    onClick={() => {
                        this.sendShortFormRequest()
                    }}
                />
            </div>
        );
    }
}

