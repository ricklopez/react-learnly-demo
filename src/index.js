import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';


/*Styles*/
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/*Containers*/
import Home from './Home';
import SignIn from './SignIn';
import App from './App';

/*Services*/
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

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
