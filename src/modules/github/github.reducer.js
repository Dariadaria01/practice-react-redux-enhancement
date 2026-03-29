import { SET_USERNAME, SET_REPOS, SET_FILTER } from './github.types';

const initialState = {
  username: '',
  repos: [],
  filter: '',
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case SET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default githubReducer;
