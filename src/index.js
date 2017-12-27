import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { withHandlers } from 'recompose';

const enhance = withHandlers({
  testFn: () => e => console.log('Hello'),
});

const Post = key => {
  return (
    <a href="/" className="list-group-item">
      <h3 className="list-group-item-heading">List group item heading</h3>
    </a>
  );
};

const Posts = () => {
  let data = Array.from(Array(10).keys());
  return (
    <div className="row">
      <div className="list-group">{data.map((_, i) => <Post key={i} />)}</div>
    </div>
  );
};

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
    <Posts />
  </div>
));
// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
