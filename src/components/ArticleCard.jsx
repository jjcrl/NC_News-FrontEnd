import { formatDate } from "../utils/helperFuncs";
import { Gen } from "./Gen";

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

      <div id="artwork">
        <Gen />
      </div>

      <div id="single-container">
        <ul id={props.single ? "single-creation" : "creation"}>
          <li>a {props.author}</li>
          <li>d {date}</li>
        </ul>

        <ul id={props.single ? "single-engagment" : "engagment"}>
          <li>v {props.votes}</li>
          <li>c {props.comment_count}</li>
        </ul>
      </div>

      {props.single ? <p className="single-card-body">{props.body}</p> : null}
    </div>
  );
};
