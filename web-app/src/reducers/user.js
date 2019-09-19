import {
  USER_LOGIN_PROCESS_COMPLETE,
  USER_LOGGEDOUT,
  USER_LOGIN_ERRORED,
  USER_LOGIN_PROCESSING
} from '../actions/user';

export const loginErrored = (
  state = { hasErrored: false, errorText: '' },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_ERRORED:
      return action.errorDetail;
    default:
      return state;
  }
};

export const loginIsProcessing = (state = false, action) => {
  switch (action.type) {
    case USER_LOGIN_PROCESSING:
      return action.isLoading;
    default:
      return state;
  }
};

export const userProfile = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_PROCESS_COMPLETE:
      return action.user;
    case USER_LOGGEDOUT:
      return Object.assign({}, action.user, {
        loggedin: false,
        loggedOut: true
      });
    default:
      return state;
  }
};
