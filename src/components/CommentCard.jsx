import { Voting } from "./Voting";

export const CommentCard = (props) => {
  return (
    <div className="comment-card">
      <p>{props.author}</p>
      <p>{props.created_at}</p>
      <Voting votes={props.votes} />
      <p id="comment-body">{props.body}</p>
    </div>
  );
};
