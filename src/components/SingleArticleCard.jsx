import { TopicCard } from "./TopicCard";
import { ArticleArtwork } from "./ArticleArtwork";
import { Loader } from "./Loader";

export const SingleArticleCard = (props) => {
  if (!props.topic) return <Loader />;
  return (
    <div className="single-article-card">
      <div className="letters-artwork">
        <ArticleArtwork />
      </div>
      <div className="article-heading-container">
        <p id="single-article-card-topic">~ {props.article.topic} ~</p>
        <p id="single-title">{props.article.title}.</p>
        <div className="creation">
          <p id="single-author">@{props.article.author}</p>
          <p id="date">{props.article.created_at}.</p>
        </div>
      </div>

      <div className="article-body-container">
        <p id="single-card-body">¶ _{props.article.body}</p>
        <TopicCard
          topic={props.topic}
          count={props.posts}
          votes={props.totalvotes}
        />
      </div>
    </div>
  );
};
