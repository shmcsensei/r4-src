import React from 'react';

export const AddressBar = ({ home, refresh }) => (
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
        onClick={home}
      >
        <span className="glyphicon glyphicon-home" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="btn btn-default"
        aria-label="Refresh"
        onClick={refresh}
      >
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
);
