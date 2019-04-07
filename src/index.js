import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
