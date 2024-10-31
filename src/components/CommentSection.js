import React, { useState } from 'react';

const CommentSection = ({ postId, author, timeAgo, text, replies, onReply }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment('');
    // Here you could also send the comment to a backend API
  };

  const [showReplies, setShowReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  const toggleReplies = () => setShowReplies(!showReplies);
  const toggleReplyInput = () => setShowReplyInput(!showReplyInput);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(replyText);  // Call the onReply function with reply text
      setReplyText('');    // Clear the input
      setShowReplyInput(false); // Hide the input after submission
    }
  };

  return (
    <div className="comment-section">
    <div className="comment">
      <div className="author">{author} • {timeAgo}</div>
      <p>{text}</p>
      <div className="comment-actions">
        <button className="btn-flat" onClick={toggleReplies}>
          {showReplies ? 'Hide replies' : 'Show replies'}
        </button>
        <button className="btn-flat" onClick={toggleReplyInput}>
          Reply
        </button>
      </div>

      {showReplyInput && (
        <form onSubmit={handleReplySubmit} className="reply-form">
          <input
            type="text"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="reply-input"
          />
          <button type="submit" className="btn waves-effect waves-light">
            Submit
          </button>
        </form>
      )}
    </div>

    {showReplies && replies && replies.length > 0 && (
      <div className="replies">
        {replies.map((reply, index) => (
          <CommentSection
            key={index}
            {...reply}
            onReply={(text) => onReply(text, index)} // Pass onReply function to child
          />
        ))}
      </div>
    )}
  </div>
  );
};

export default CommentSection;
