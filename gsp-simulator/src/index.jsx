import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'bootstrap';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import rootReducer from './reducers/reducersCore'
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
const loggerMiddleware = createLogger()

// const store = configureStore()
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

ReactDOM.render(<
    Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'));
