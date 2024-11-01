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

        <div className="row s3 post-actions">
          <div className="col s1">
            <i className="material-icons" onClick={handleLike}>favorite</i>
            <span>{likes}</span>
          </div>
          <div className="col s1">
            <i className="material-icons" >insert_comment</i>
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