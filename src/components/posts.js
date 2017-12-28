import React from 'react';

export const Post = key => {
  return (
    <a href="/" className="list-group-item">
      <h3 className="list-group-item-heading">List group item heading</h3>
    </a>
  );
};

export const Posts = data => {
  data = Array.from(Array(10).keys());
  return (
    <div className="row">
      <div className="list-group">{data.map((_, i) => <Post key={i} />)}</div>
    </div>
  );
};
