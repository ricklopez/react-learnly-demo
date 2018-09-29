import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';

/*Styles*/
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/*Containers*/
import App from './App';

/*Services*/
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers,composeWithDevTools(applyMiddleware(ReduxPromise)));
window.store = store;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
