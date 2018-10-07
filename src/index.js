import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';


/*Styles*/
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.css';

/*Containers*/
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import App from './containers/App';

/*Services*/
import reducers from './reducers';
import registerServiceWorker from './lib/registerServiceWorker';

const store = createStore(reducers,composeWithDevTools(applyMiddleware(ReduxPromise)));
window.store = store;


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/app" component={App}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
