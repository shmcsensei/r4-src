import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export const Post = ({ post }) => {
  return (
    <a
      href={'https://www.reddit.com/' + post.permalink}
      target="_blank"
      className="list-group-item"
    >
      <h4 className="list-group-item-heading">{post.title}</h4>
    </a>
  );
};

export const Posts = ({ posts }) => {
  return (
    <div className="row posts">
      <div className="list-group">
        <CSSTransitionGroup
          transitionName="posts"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {posts
            ? posts.map(post => <Post key={post.id} post={post} />)
            : 'No Posts Found'}
        </CSSTransitionGroup>
      </div>
    </div>
  );
};
