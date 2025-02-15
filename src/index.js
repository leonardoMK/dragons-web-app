import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import reduxSetup from  './store/reduxSetup';

const store = reduxSetup();
ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
