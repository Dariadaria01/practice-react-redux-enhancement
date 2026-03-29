import { SET_QUERY, SET_QUESTIONS, SET_SORT } from './stackoverflow.types';

const initialState = {
    query: '',
    questions: [],
    sort: 'date',
};

const stackoverflowReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload };

        case SET_QUESTIONS:
            return { ...state, questions: action.payload };

        case SET_SORT:
            return { ...state, sort: action.payload };

        default:
            return state;
    }
};

export default stackoverflowReducer;