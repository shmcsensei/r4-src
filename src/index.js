import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { withHandlers } from 'recompose';
import { Posts } from './components/posts';
import { AddressBar } from './components/addressBar';

import { Titles } from './data';

console.log(Titles);

const enhance = withHandlers({
  homeClick: () => e => console.log('Hello'),
});

const App = enhance(({ homeClick }) => (
  <div className="container">
    <div className="row">
      <div className="page-header">
        <h1>
          R4 <small>The React Reddit Recompose Reader</small>
        </h1>
      </div>
    </div>
    <AddressBar homeClick={homeClick} />
    <Posts />
  </div>
));
// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
