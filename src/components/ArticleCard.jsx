import { formatDate } from "../utils/helperFuncs";
import { Gen } from "./Gen";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);

  return (
    <div className={props.single ? "single-article-card" : "article-card"}>
      <p id={props.single ? "single-article-card-topic" : "article-card-topic"}>
        {props.topic}
      </p>
      <div id="artwork">
        <Gen single={props.single} />
      </div>

      <p id={props.single ? "single-title" : "title"}>{props.title}</p>

      {props.single ? (
        <div className="creation">
          <p>{props.author}</p>
          <p>{date}</p>
        </div>
      ) : null}

      {props.single ? <p id="single-card-body">{props.body}</p> : null}
    </div>
  );
};
