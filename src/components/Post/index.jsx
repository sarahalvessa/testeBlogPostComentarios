import {useState} from 'react'
import { Comment } from "../Comment";

export const Post = ({ id, title, body, comments}) => {
  const [showComments, setShowComments] = useState({});

  const handleToggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>

      <div className="comments">
        <p
          className="vercomentarios"
          onClick={() => handleToggleComments(id)}
        >
          Ver comentários
        </p>

        {showComments[id] && (
          <div className="abrircomentarios">
            {comments
              .filter((comment) => comment.postId === id)
              .map((comment) => (
                <Comment
                  className="comment"
                  key={comment.id}
                  body={comment.body}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
