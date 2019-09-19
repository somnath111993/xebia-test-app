import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { processLogin, loginProcessComplete } from '../actions/user';

const Login = props => {
  const userProfile = useSelector(state => state.userProfile);
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userProfile && Object.keys(userProfile).length !== 0) {
      console.log('[USER PROFILE]', userProfile);
      userProfile.loggedin ? props.history.push('/dashboard') : null;
    } else {
      if (sessionStorage.getItem('UserProfile')) {
        dispatch(
          loginProcessComplete(
            JSON.parse(sessionStorage.getItem('UserProfile'))
          )
        );
      }
    }
  });

  const authHandler = () => {
    setLoading(true);
    dispatch(processLogin({ userEmail, userPassword }));
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        authHandler();
      }}
    >
      User Email:
      <br />
      <input
        type="email"
        name="email"
        value={userEmail}
        placeholder="john@mail.com"
        onChange={e => setUserEmail(e.target.value)}
      />
      <br />
      Password:
      <br />
      <input
        type="password"
        name="password"
        value={userPassword}
        placeholder="Password"
        onChange={e => setUserPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Sign In'}
      </button>
    </form>
  );
};

export default Login;
