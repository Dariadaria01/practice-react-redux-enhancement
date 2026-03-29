import { SET_USERNAME, SET_REPOS, SET_FILTER } from './github.types';

import { fetchRepos } from './github.api';

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const loadRepos = (username) => {
  return async (dispatch) => {
    const repos = await fetchRepos(username);
    dispatch({
      type: SET_REPOS,
      payload: repos,
    });
  };
};

