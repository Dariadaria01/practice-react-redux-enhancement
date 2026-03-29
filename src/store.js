import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from './modules/github';

const store = createStore(
    githubReducer,
    applyMiddleware(thunk)
);

export default store;