import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components/posts';
import { AddressBar } from './components/addressBar';

import { compose, withHandlers, withState, lifecycle } from 'recompose';
import { fetchData } from './data';

const homeAddr = 'https://www.reddit.com';
const homeAddrS = homeAddr + '/';
const startAddr = window.localStorage.address || homeAddrS;

const withData = lifecycle({
  componentDidMount() {
    fetchData(startAddr + '.json').then(data => {
      this.props.setMsg(false);
      this.props.setPosts(data);
    });
  },
});

const reload = ({ address, setAddress, setMsg, setPosts }) => {
  setMsg('Loading');

  if (address.match(/^\/r/i)) {
    address = homeAddr + address;
    setAddress(address);
  } else if (!address.startsWith(homeAddrS)) {
    setMsg('Please enter a reddit URL');
    setPosts([]);
    return;
  }
  fetchData(address + '.json')
    .then(data => {
      window.localStorage.address = address;
      setMsg(false);
      setPosts(data);
    })
    .catch(reson => {
      setMsg('Error loading URL');
      setPosts([]);
    });
};

const addFun = compose(
  withState('posts', 'setPosts', []),
  withState('address', 'setAddress', startAddr),
  withState('msg', 'setMsg', 'Loading'),
  withData,
  withHandlers({
    refresh: props => e => {
      e.preventDefault();
      reload(props);
    },
    home: props => e => {
      e.preventDefault();
      props.setAddress(homeAddrS);
      reload(props);
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

const App = addFun(({ home, refresh, msg, posts, address, addressUpdater }) => {
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
      {msg ? <Msg msg={msg} /> : <Posts posts={posts} />}
    </div>
  );
});

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
