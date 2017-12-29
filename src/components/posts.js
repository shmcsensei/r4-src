import React from 'react';

export const Post = ({ post }) => {
  return (
    <a href="/" className="list-group-item">
      <h3 className="list-group-item-heading">{post.title}</h3>
    </a>
  );
};

export const Posts = ({ posts }) => {
  return (
    <div className="row">
      <div className="list-group">
        {posts && posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};
