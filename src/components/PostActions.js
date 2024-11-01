import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient'; // Import your Supabase client
import 'materialize-css/dist/css/materialize.min.css';

const PostActions = ({ postId, likesCount }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  useEffect(() => {
    fetchLikesAndComments();
  }, []);

  const fetchLikesAndComments = async () => {
    const { data: likeData } = await supabase
      .from('Likes')
      .select('*')
      .eq('post_id', postId);
    setLikes(likeData);

    const { data: commentData } = await supabase
      .from('Comments')
      .select('*')
      .eq('post_id', postId);
    setComments(commentData);
  };

  const handleLike = async () => {
    await supabase
      .from('Likes')
      .insert({ post_id: postId });
    setLikes(likes + 1);
  };

  const handleComment = () => {
    // Code to show comment input field
  };

  return (
    <div className="row s3 post-actions">
      <div className="col s1">
        <i className="material-icons" onClick={handleLike}>favorite</i>
        <span>{likesCount}</span>
      </div>
      <div className="col s1">
        <i className="material-icons" onClick={handleComment}>insert_comment</i>
        <span>{comments}</span>
      </div>
      <div className="col s1">
        <i className="material-icons">share</i>
      </div>
    </div>
  );
};

export default PostActions;
