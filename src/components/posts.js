import React from 'react';

export const Post = ({ title }) => {
  return (
    <a href="/" className="list-group-item">
      <h3 className="list-group-item-heading">{title}</h3>
    </a>
  );
};

export const Posts = ({ postsData }) => {
  return (
    <div className="row">
      <div className="list-group">
        {postsData.map((postInfo, i) => <Post key={i} title={postInfo} />)}
      </div>
    </div>
  );
};
