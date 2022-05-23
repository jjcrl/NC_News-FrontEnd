import { formatDate } from "../utils/helperFuncs";
import { Voting } from "./Voting";

export const CommentCard = (props) => {
  const date = formatDate(props.created_at);

  return (
    <div className="comment-card">
      <div className="comment-card-creation">
        <span id="author-dp"></span>
        <p id="author">@{props.author}</p>
      </div>

      <p className="comment-card-body">{props.body}</p>
      <Voting comment={true} votes={props.votes} />
    </div>
  );
};
