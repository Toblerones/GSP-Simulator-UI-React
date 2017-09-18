import React, { Component, PropTypes } from 'react';
import {Toggle} from './Toggle';
require('./UserShortForm.css')

class UserShortForm extends Component {

    render() {
        const {getShortFormLink, ssoLink} = this.props;
        return (
            <div >
                <input type="text" name="cin" className="question" id="nme" required autoComplete="off" />
                <label htmlFor="nme"><span>Customer Number</span></label>
                <input type="text" name="tUrl" className="question" id="msg" required autoComplete="off"/>
                <label htmlFor="msg"><span>Target Url</span></label>

                <Toggle activeLabel={"CAM 40"} deactiveLabel={"CAM 30"} activeColor={"#17cae6"} deactiveColor={"#17cae6"} />

                <button onClick={() => {getShortFormLink()}}>Go</button>
                <br />
                <br />
                <button onClick={getShortFormLink}>Get Link with Token</button>
                <br />
                Link: {ssoLink}
            </div>
        );
    }
}

UserShortForm.propTypes = {
    getShortFormLink: PropTypes.func,
    ssoLink: PropTypes.string

}

export default UserShortForm