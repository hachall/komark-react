import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import '../assets/stylesheets/application.scss';

import App from './components/app';

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

const middlewares = applyMiddleware(logger);

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
      <App />

    </Provider>,
    root);
}
