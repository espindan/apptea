import React from 'react';

const Post = ({ title, content, image }) => {
  return (
    <div className="card horizontal">
        <div className="card-image">
          <img src={image} />
        </div>
        <div className="card-stacked">
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
        
    </div>
  );
};

export default Post;