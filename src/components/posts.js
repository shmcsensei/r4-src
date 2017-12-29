import React from 'react';

export const Post = ({ post }) => {
  return (
    <a
      href={'https://www.reddit.com/' + post.permalink}
      className="list-group-item"
    >
      <h4 className="list-group-item-heading">{post.title}</h4>
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
