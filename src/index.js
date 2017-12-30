import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components/posts';
import { AddressBar } from './components/addressBar';

import { compose, withHandlers, withState, lifecycle } from 'recompose';
import { fetchData } from './data';

const startAddr = window.localStorage.address || 'https://www.reddit.com/';

const withData = lifecycle({
  componentDidMount() {
    fetchData(startAddr + '.json').then(data => {
      this.props.setRefresh(false);
      this.props.setPosts(data);
    });
  },
});

const reload = (address, setRefresh, setPosts) => {
  setRefresh('Loading');
  fetchData(address + '.json')
    .then(data => {
      window.localStorage.address = address;
      setRefresh(false);
      setPosts(data);
    })
    .catch(reson => {
      setRefresh('Error loading URL');
      setPosts([]);
    });
};

const addFun = compose(
  withState('posts', 'setPosts', []),
  withState('address', 'setAddress', startAddr),
  withState('refreshing', 'setRefresh', 'Loading'),
  withData,
  withHandlers({
    refresh: ({ address, setRefresh, setPosts }) => e => {
      e.preventDefault();
      reload(address, setRefresh, setPosts);
    },
    home: ({ setAddress, setRefresh, setPosts }) => e => {
      e.preventDefault();
      setAddress(startAddr);
      reload(startAddr, setRefresh, setPosts);
    },
    addressUpdater: ({ setAddress }) => e => {
      setAddress(e.target.value);
    },
  }),
);

const Msg = ({ msg }) => (
  <div className="row">
    <div className="text-center">{msg}</div>
  </div>
);

const App = addFun(
  ({ home, refresh, refreshing, posts, address, addressUpdater }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="page-header">
            <h1>
              R4 <small>The React Reddit Recompose Reader</small>
            </h1>
          </div>
        </div>
        <AddressBar
          home={home}
          refresh={refresh}
          address={address}
          addressUpdater={addressUpdater}
        />
        {refreshing ? <Msg msg={refreshing} /> : <Posts posts={posts} />}
      </div>
    );
  },
);

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
