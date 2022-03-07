import { formatDate } from "../utils/helperFuncs";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);
  return (
    <div className="article-card">
      <p className="article-card-topic">{props.topic}</p>
      <p id="title">{props.title}</p>

      <svg id="temp-fill" />

      <ul id="creation">
        <li>{props.author}</li>
        <li>{date}</li>
      </ul>

      <ul id="engagment">
        <li>votes {props.votes}</li>
        <li>comments {props.comment_count}</li>
      </ul>
    </div>
  );
};
