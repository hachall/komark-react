import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { logger } from 'redux-logger';

import '../assets/stylesheets/application.scss';

import Home from './components/home';
import MixShow from './containers/mix_show';
import MixPlayer from './containers/mix_player';

import tagsReducer from './reducers/tags_reducer';
import selectedTagsReducer from './reducers/selected_tags_reducer';
import mixesReducer from './reducers/mixes_reducer';
import allMixesReducer from './reducers/all_mixes_reducer';
const reducers = combineReducers({
  tags: tagsReducer,
  selectedTags: selectedTagsReducer,
  allMixes: allMixesReducer,
  mixes: mixesReducer
});

const initialState = {
  selectedTags: []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger));

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mixes/:id" exact component={MixShow} />
        </Switch>
      </Router>
        {/*<MixPlayer />*/}

    </Provider>,
    root);
}
