import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginProcessComplete } from '../actions/user';
import { fetchNewsData } from '../actions/data';
import '../styles/main.css';

const Dashboard = props => {
  const userProfile = useSelector(state => state.userProfile);
  const isLoadingData = useSelector(state => state.loadingData);
  const newsData = useSelector(state => state.newsData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!userProfile.loggedin) {
      if (sessionStorage.getItem('UserProfile')) {
        dispatch(
          loginProcessComplete(
            JSON.parse(sessionStorage.getItem('UserProfile'))
          )
        );
      } else props.history.push('/');
    }
  });

  React.useEffect(() => {
    if (!isLoadingData && newsData.length === 0) {
      dispatch(fetchNewsData());
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('UserProfile');
    props.history.push('/loggedOut');
  };

  const articles = newsData.map((value, index) => {
    return (
      <div key={index} className={'cards'}>
        <img
          src={value.urlToImage}
          alt={'Not Available'}
          className={'card-image'}
          onError={e => {
            e.target.src =
              'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg';
          }}
        />
        <div className={'card-details'}>
          <div className={'tags'}>
            {value.author
              ? value.author.split(',').map((titles, indx) => (
                  <div key={indx} className={'tag-author'}>
                    {titles}
                  </div>
                ))
              : 'Un-titled'}
            <div className={'tag-name'}>
              {value.source.name ? value.source.name : 'Un-titled'}
            </div>
          </div>
          <div className={'title'}>{value.title}</div>
          <p className={'articles'}>{value.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button type="button" className="logout-btn" onClick={handleLogout}>
        LOG OUT
      </button>
      {isLoadingData ? (
        <div className="loader"></div>
      ) : (
        <div className="container">{articles}</div>
      )}
    </div>
  );
};

export default Dashboard;
