import { formatDate } from "../utils/helperFuncs";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);
  return (
    <div className={props.single ? "single-article-card" : "article-card"}>
      <p
        className={
          props.single ? "single-article-card-topic" : "article-card-topic"
        }
      >
        {props.topic}
      </p>
      <p id={props.single ? "single-title" : "title"}>{props.title}</p>

      <svg id="temp-fill" />

      <div id="single-container">
        <ul id={props.single ? "single-creation" : "creation"}>
          <li>{props.author}</li>
          <li>{date}</li>
        </ul>

        <ul id={props.single ? "single-engagment" : "engagment"}>
          <li>votes {props.votes}</li>
          <li>comments {props.comment_count}</li>
        </ul>
      </div>

      {props.single ? <p className="single-card-body">{props.body}</p> : null}
    </div>
  );
};
