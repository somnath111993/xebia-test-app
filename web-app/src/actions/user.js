import { axios } from '../utils/axios';

export const USER_LOGIN_ERRORED = 'USER_LOGIN_ERRORED';
export const USER_LOGIN_PROCESSING = 'USER_LOGIN_PROCESSING';
export const USER_LOGIN_PROCESS_COMPLETE = 'USER_LOGIN_PROCESS_COMPLETE';
export const USER_LOGGEDOUT = 'USER_LOGGEDOUT';

export const loginErrored = errorDetail => {
  return {
    type: USER_LOGIN_ERRORED,
    errorDetail
  };
};

export const loginIsProcessing = bool => {
  return {
    type: USER_LOGIN_PROCESSING,
    isLoading: bool
  };
};

export const loginProcessComplete = user => {
  return {
    type: USER_LOGIN_PROCESS_COMPLETE,
    user
  };
};

export const processLogin = loginData => {
  return dispatch => {
    console.log('In login action', loginData);
    dispatch(loginIsProcessing(true));
    dispatch(loginErrored({ hasErrored: false, errorText: '' }));
    sessionStorage.removeItem('UserProfile');
    axios({
      method: 'post',
      url: '/user/login',
      data: loginData
    })
      .then(response => {
        console.log('CHECK', response);
        if (response.status === 200) {
          const userData = {
            user_email: response.data.userEmail,
            loggedin: true
          };
          dispatch(loginProcessComplete(userData));
          sessionStorage.setItem('UserProfile', JSON.stringify(userData));
        }
      })
      .catch(error => {
        dispatch(loginErrored({ hasErrored: true, errorText: error }));
      });
    dispatch(loginIsProcessing(false));
  };
};

export const processLogout = user => {
  if (sessionStorage.hasOwnProperty('UserProfile')) {
    // Add code to perform any backend update on user logout
    sessionStorage.removeItem('UserProfile');
  }
  return {
    type: USER_LOGGEDOUT,
    user
  };
};
