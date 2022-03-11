import { formatDate } from "../utils/helperFuncs";
import { ArticleArtwork } from "./ArticleArtwork";
import { Gen } from "./Gen";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);

  return (
    <div
      id={props.top ? "top-article-card" : null}
      className={props.single ? "single-article-card" : "article-card"}
    >
      {props.single ? (
        <div className="letters-artwork">
          <ArticleArtwork />
        </div>
      ) : props.top ? (
        <div id="artwork">
          <Gen single={props.single} />
        </div>
      ) : null}

      <p id={props.single ? "single-article-card-topic" : "article-card-topic"}>
        #{props.topic}
      </p>
      <p id={props.single ? "single-title" : "title"}>{props.title}</p>

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
