import React, { Component } from 'react';
require('./UserShortForm.css');
var classNames = require('classnames');

export class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.toggleState = this.toggleState.bind(this);
        this.insideStyles = this.insideStyles.bind(this);
        this.toggleStyles = this.toggleStyles.bind(this);
    }

    getInitialState() {
        return ({
            state: false
        })
    }

    toggleState() {
        this.setState({
            toggle: !this.state.toggle
        })
        if (this.props.onToggle) {
            this.props.onToggle(!this.state.toggle ? this.props.activeLabel || !this.state.toggle : this.props.deactiveLabel || !this.state.toggle)
        }
    }

    insideStyles() {
        return ({
            background: this.state.toggle ? typeof this.props.activeColor !== "undefined" ? this.props.activeColor : "" : typeof this.props.deactiveColor !== "undefined" ? this.props.deactiveColor : ""
        })
    }

    toggleStyles() {
        if (!typeof this.props.borderMatch !== "undefined" && this.props.borderMatch) {
            return ({
                border: this.state.toggle ? typeof this.props.activeColor !== "undefined" ? "solid 1px " + this.props.activeColor : "" : typeof this.props.deactiveColor !== "undefined" ? "solid 1px " + this.props.deactiveColor : ""
            })
        }
    }

    render() {
        return (
            <div className="toggleHolder">
                <h3>{this.props.heading}</h3>
                <div className="toggleWrapper" onClick={this.toggleState}>
                    <div className={classNames("toggleLabel", {active: !this.state.toggle})}>
                        <p>{this.props.deactiveLabel || ""}</p>
                    </div>
                    <div className={classNames("toggle", {active: this.state.toggle}, {deactive: !this.state.toggle})} style={this.toggleStyles()}>
                        <div className="inside" style={this.insideStyles()}>
                        </div>
                    </div>
                    <div className={classNames("toggleLabel", {active: this.state.toggle})}>
                        <p>{this.props.activeLabel || ""}</p>
                    </div>
                </div>
            </div>
        )
    }
}