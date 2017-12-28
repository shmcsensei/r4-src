import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components/posts';
import { AddressBar } from './components/addressBar';

import { compose, withHandlers, withState } from 'recompose';
import { postsData } from './data';

console.log(postsData);

const addFun = compose(
  withState('postsData', 'setPostData', postsData),
  withHandlers({
    homeClick: () => e => console.log('Hello'),
  }),
);

const App = addFun(({ homeClick, postsData }) => (
  <div className="container">
    <div className="row">
      <div className="page-header">
        <h1>
          R4 <small>The React Reddit Recompose Reader</small>
        </h1>
      </div>
    </div>
    <AddressBar homeClick={homeClick} />
    <Posts postsData={postsData} />
  </div>
));
// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
