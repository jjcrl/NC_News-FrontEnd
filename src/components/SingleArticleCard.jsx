import { TopicCard } from "./TopicCard";
import { ArticleArtwork } from "./ArticleArtwork";
import { Loader } from "./Loader";
import "../Css/single-article.css";

export const SingleArticleCard = (props) => {
  let slice1 = "";
  let slice2 = "";
  let slice3 = "";

  if (props.article.body) {
    const points = [];
    for (let i = 0; i < props.article.body.length; i++) {
      if (props.article.body[i] === ".") {
        points.push(i);
      }
    }
    slice1 = props.article.body.slice(0, points[0] + 1);
    slice2 = props.article.body.slice(points[0] + 1, points[1] + 1);
    slice3 = props.article.body.slice(points[1] + 1, props.article.body.length);
  }

  if (!props.topic) return <Loader />;
  return (
    <div className="single-article-card">
      <div className="letters-artwork">
        <ArticleArtwork />
      </div>
      <div className="article-heading-container">
        <p id="single-article-card-topic">~ {props.article.topic} ~</p>
        <p id="single-title">{props.article.title}</p>
        <div className="creation">
          <p id="single-author">@{props.article.author}</p>
          <p id="date">{props.article.created_at}.</p>
        </div>
      </div>

      <div className="article-body-container">
        <span id="single-card-body">
          {slice1}
          <span id="single-card-body-bold">"{slice2}"</span>
          {slice3}
        </span>

        <TopicCard
          topic={props.topic}
          count={props.posts}
          votes={props.totalvotes}
          gTotal={props.gTotal}
        />
      </div>
    </div>
  );
};
