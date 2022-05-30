import { Gen } from "./Gen";
export const ArticleCard = (props) => {
  if (props.top) {
    const singleTotal =
      props.article.votes + Number(props.article.comment_count);
    const score = (singleTotal / props.gTotal) * 100;

    return (
      <div className="top-article-card">
        <div className="card-info">
          <p id="topic">✧ {props.article.topic}</p>
          <p id="top-title">{props.article.title}.</p>
          <p id="top4-article-card-author">@{props.article.author}</p>
        </div>

        <div className="engagement-container">
          <div className="engagement">
            <p id="engagement">*{props.article.votes}</p>
            <p id="engagement-text">++</p>
          </div>
          <div className="engagement">
            <p id="engagement">{props.article.comment_count}</p>
            <p id="engagement-text">..^</p>
          </div>
          <div className="engagement">
            <p id="engagement">{score.toFixed(1)}</p>
            <p id="engagement-text">¤</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="article-card">
        <div id="artwork">
          <Gen single={props.single} />
        </div>
        <p id="article-card-topic">✧ {props.article.topic}</p>
        <p id="title">
          {props.article.title}
          {props.article.title[props.article.title.length - 1] === "?"
            ? null
            : "."}
        </p>
        <p id="article-card-author">@{props.article.author}</p>
      </div>
    );
  }
};
