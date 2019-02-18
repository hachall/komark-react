import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import '../assets/stylesheets/application.scss';

import AppIndex from './components/appindex';

import tagsReducer from './reducers/tags_reducer';
import selectedTagsReducer from './reducers/selected_tags_reducer';
const reducers = combineReducers({
  tags: tagsReducer,
  selectedTags: selectedTagsReducer
});

const initialState = {
  selectedTags: []
}

const middlewares = applyMiddleware(logger);

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
      <AppIndex />
    </Provider>,
    root);
}
