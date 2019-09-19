import { axios } from '../utils/axios';

export const FETCHING_NEWS_DATA = 'FETCHING_NEWS_DATA';
export const FETCHED_NEWS_DATA = 'FETCHED_NEWS_DATA';

export const fetchingNewsData = bool => {
  return {
    type: FETCHING_NEWS_DATA,
    fetchingData: bool
  };
};

export const fetchingNewsDataComplete = data => {
  return {
    type: FETCHED_NEWS_DATA,
    articles: data
  };
};

export const fetchNewsData = () => {
  return dispatch => {
    dispatch(fetchingNewsData(true));
    axios({
      method: 'get',
      url: '/data/about-bitcoin'
    })
      .then(response => {
        if (response.status === 200) {
          dispatch(fetchingNewsDataComplete(response.data.articles));
        }
      })
      .catch(error => {
        console.error('[ERROR FETCHING DATA]', error);
      });
    dispatch(fetchingNewsData(false));
  };
};
