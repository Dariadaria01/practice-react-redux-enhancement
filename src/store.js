import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { githubReducer } from './modules/github';
import { stackoverflowReducer } from './modules/stackoverflow';

const rootReducer = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
