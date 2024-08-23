import React from 'react';

const Post = ({ title, content }) => {
  return (
    <div className="card">
        <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
        </div>
        <div className="card-action">
        <a href="#!">Like</a>
        <a href="#!">Comment</a>
        <a href="#!">Share</a>
      </div>
    </div>
  );
};

export default Post;