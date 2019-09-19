import { FETCHING_NEWS_DATA, FETCHED_NEWS_DATA } from '../actions/data';

export const loadingData = (state = false, action) => {
  switch (action.type) {
    case FETCHING_NEWS_DATA:
      return action.fetchingData;
    default:
      return state;
  }
};

export const newsData = (state = [], action) => {
  console.log('IN reducer', action);
  switch (action.type) {
    case FETCHED_NEWS_DATA: {
      return action.articles;
    }
    default:
      return state;
  }
};
