import { combineReducers } from 'redux';
import { userProfile, loginErrored, loginIsProcessing } from './user';
import { loadingData, newsData } from './data';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  userProfile,
  loginErrored,
  loginIsProcessing,
  loadingData,
  newsData
});

export default allReducers;
