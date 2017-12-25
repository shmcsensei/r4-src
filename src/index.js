import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { withHandlers } from 'recompose';

const enhance = withHandlers({
  testFn: () => e => console.log('Hello'),
});

const Post = () => {
  <a href={() => {}} className="list-group-item">
    <span className="badge">14</span>
    <h3 className="list-group-item-heading">List group item heading</h3>
  </a>;
};

const Posts = () => {};

const App = enhance(({ testFn }) => (
  <div className="container">
    <div className="row">
      <div className="page-header">
        <h1>
          R4 <small>The React Reddit Recompose Reader</small>
        </h1>
      </div>
    </div>
    <div className="row AddressBar">
      <div
        className="AddressButtons btn-group"
        role="group"
        aria-label="Address Actions"
      >
        <button
          type="button"
          className="btn btn-default"
          aria-label="Home"
          onClick={testFn}
        >
          <span className="glyphicon glyphicon-home" aria-hidden="true" />
        </button>
        <button type="button" className="btn btn-default" aria-label="Refresh">
          <span className="glyphicon glyphicon-refresh" aria-hidden="true" />
        </button>
      </div>
      <div className="AddressField">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="RedditAddress"
              placeholder="Reddit Address e.g '/r/reactjs' or 'https://www.reddit.com/r/reactjs/'"
            />
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="list-group">
        <a href="" className="list-group-item">
          <span className="badge">14</span>
          <h3 className="list-group-item-heading">List group item heading</h3>
        </a>

        <a href="" className="list-group-item">
          <span className="badge">14</span>
          <h3 className="list-group-item-heading">List group item heading</h3>
          <p className="list-group-item-text">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </a>

        <a href="" className="list-group-item">
          <span className="badge">14</span>
          <h3 className="list-group-item-heading">List group item heading</h3>
          <p className="list-group-item-text">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </a>
      </div>
    </div>
  </div>
));
// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
