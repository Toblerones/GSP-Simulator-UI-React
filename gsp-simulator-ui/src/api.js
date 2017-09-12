import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { connect } from "react-redux"
import {
    reducer as api,
    setEndpointHost,
    setEndpointPath,
    setHeader,
    readEndpoint,
    createEntity,
    updateEntity,
    deleteEntity
} from "redux-json-api"