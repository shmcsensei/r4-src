import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components/posts';
import { AddressBar } from './components/addressBar';

import { compose, withHandlers, withState, lifecycle } from 'recompose';
import { fetchData } from './data';

const homeAddr = 'https://www.reddit.com/.json';

const withData = lifecycle({
  state: { loading: true, posts: [] },
  componentDidMount() {
    fetchData(homeAddr).then(data =>
      this.setState({ loading: false, ...data }),
    );
  },
});

const addFun = compose(
  withState('refreshing', 'setRefresh', true),
  withHandlers({
    home: () => e => console.log('Hello'),
    refresh: () => e => console.log('World'),
  }),
  withData,
);

const App = addFun(({ home, refresh, posts }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="page-header">
          <h1>
            R4 <small>The React Reddit Recompose Reader</small>
          </h1>
        </div>
      </div>
      <AddressBar home={home} refresh={refresh} />
      <Posts posts={posts} />
    </div>
  );
});

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
