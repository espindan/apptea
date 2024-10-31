import React, { useState, useEffect } from 'react';


const Post = ({ id, title, content, image, author, likes }) => {
  // const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
     // setLikes(likes - 1);
    } else {
      //setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-section">
      <div className="post">
        <div className="author">{author} • 1 año</div>
        <h5>{title}</h5>
        <p>{content}</p>
        <div >
          <div className="like-component">
            <button
              onClick={handleLike}
              className="btn-flat like-button"
              style={{ cursor: 'pointer', color: isLiked ? 'red' : 'black' }}
            >
              <i className="material-icons">
                {isLiked ? 'favorite' : 'favorite_border'}
              </i>
            </button>
            <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          </div>
        </div>
      </div>
    </div>


    // <div className="card horizontal">
    //     <div className="card-image">
    //       <img src={image} />
    //     </div>
    //     <div className="card-stacked">
    //       <div className="card-content">
    //           <span className="card-title">{title}</span>        

    //           <p>{content}</p>
    //       </div>
    //       <div className="card-action">
    //         <a href="#!">Like</a>
    //         <a href="#!">Comment</a>
    //         <a href="#!">Share</a>
    //       </div>
    //     </div>

    // </div>
  );
};

export default Post;