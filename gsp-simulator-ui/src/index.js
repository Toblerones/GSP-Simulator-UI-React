import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tether';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
