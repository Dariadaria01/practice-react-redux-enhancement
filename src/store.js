import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { stackoverflowReducer } from './modules/stackoverflow'; 

const store = createStore(
    stackoverflowReducer,
    applyMiddleware(thunk)
);

export default store;