import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Auth from './Auth';
import Profile from './Profile';
import Header from './Header';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
