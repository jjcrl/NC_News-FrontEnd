import { formatDate } from "../utils/helperFuncs";
import { Gen } from "./Gen";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);

  return (
    <div className={props.single ? "single-article-card" : "article-card"}>
      <div id="artwork">
        <Gen single={props.single} />
      </div>

      <p id={props.single ? "single-article-card-topic" : "article-card-topic"}>
        #{props.topic}
      </p>
      <p id={props.single ? "single-title" : "title"}>{props.title}_</p>

      {props.single ? (
        <div className="creation">
          <p>{date}</p>
          <p>{props.author}</p>
        </div>
      ) : null}

      {props.single ? <p id="single-card-body">{props.body}</p> : null}
    </div>
  );
};
