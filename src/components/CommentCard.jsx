export const CommentCard = (props) => {
  return (
    <div className="comment-card">
      <p>{props.author}</p>
      <p>{props.created_at}</p>
      <p>votes {props.votes}</p>
      <p id="comment-body">{props.body}</p>
    </div>
  );
};
