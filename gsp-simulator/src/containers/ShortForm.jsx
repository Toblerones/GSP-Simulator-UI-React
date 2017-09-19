import React, { Component } from "react"
import { connect } from 'react-redux'
import * as UserShortFormActions from "../action/UserShortFormAction"
import UserShortForm from "../components/UserShortForm"
import { bindActionCreators } from 'redux'

function mapStateToProps(state){
    ssoLink: state.ssoLink
}

function mapDispatchToProps (dispatch){
    return bindActionCreators(UserShortFormActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShortForm)
