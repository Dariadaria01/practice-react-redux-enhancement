import { SET_QUERY, SET_QUESTIONS, SET_SORT } from './stackoverflow.types';
import { fetchQuestions } from './stackoverflow.api';

export const setQuery = (query) => ({
    type: SET_QUERY,
    payload: query,
});

export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});

export const loadQuestions = (query) => {
    return async (dispatch) => {
        const questions = await fetchQuestions(query);

        dispatch({
            type: SET_QUESTIONS,
            payload: questions,
        });
    };
};