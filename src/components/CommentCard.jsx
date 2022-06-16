import { formatDate } from "../utils/helperFuncs";
import { Voting } from "./Voting";

export const CommentCard = (props) => {
  const date = formatDate(props.created_at);

  const colours = [
    ["#080660"],
    ["#5d6021"],
    ["#9d7c8e"],
    ["#442a4f"],
    ["#3b169a"],
    ["#dd3704"],
    ["#ed4463"],
    ["#fd9d7d"],
    ["#7e8725"],
    ["#3b2f2e"],
  ];

  return (
    <div className="comment-card">
      <div className="comment-card-creation">
        <span
          style={{
            backgroundColor: `${
              colours[Math.floor(Math.random() * colours.length)]
            }`,
          }}
          id={`author-dp`}
        ></span>
        <p id="author">@{props.author}</p>
      </div>

      <div className="comment-card-main">
        <p className="comment-card-body">{props.body}</p>
        <Voting comment={true} votes={props.votes} />
      </div>
    </div>
  );
};
