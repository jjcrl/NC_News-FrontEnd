import { formatDate } from "../utils/helperFuncs";
import { ArticleArtwork } from "./ArticleArtwork";
import { Gen } from "./Gen";
import { TopicCard } from "./TopicCard";

const topic = { slug: "coding", description: "code is love, code is Life!" };

export const ArticleCard = (props) => {
  return (
    <div
      id={props.top ? "top-article-card" : null}
      className={props.single ? "single-article-card" : "article-card"}
    >
      {props.top ? null : props.single ? (
        <div className="letters-artwork">
          <ArticleArtwork />
        </div>
      ) : props.top ? null : (
        <div id="artwork">
          <Gen single={props.single} />
        </div>
      )}

      <div className="article-heading-container">
        {props.top ? null : (
          <p
            id={
              props.single ? "single-article-card-topic" : "article-card-topic"
            }
          >
            #{props.topic}
          </p>
        )}
        <p id={props.single ? "single-title" : "title"}>{props.title}</p>
        {props.top ? null : (
          <div className="creation">
            <p>{props.author}</p>
            <p id="date">{props.created_at}</p>
          </div>
        )}
      </div>

      <div className="article-body-container">
        {props.single ? <p id="single-card-body">{props.body}</p> : null}

        {props.single && !props.top ? (
          <TopicCard
            topic={props.topic}
            count={props.count}
            votes={props.votes}
          />
        ) : null}
      </div>
    </div>
  );
};
