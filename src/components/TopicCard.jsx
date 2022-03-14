import { Link } from "react-router-dom";
import { Loader } from "./Loader";

export const TopicCard = (props) => {
  if (!props.topic) return <Loader />;
  return (
    <div className="single-topic-card">
      <Link to={`/articles/topic/`}>
        <p id="topic-title">#{props.topic.slug}</p>
        <p id="topic-description">{props.topic.description}</p>
        <div className="stats-container">
          <div className="topic-count">
            <p id="stats">{props.count}k.</p>
            <p id="stats-text">¶ost's</p>
          </div>
          <div className="topic-votes">
            <p id="stats">!{props.votes}</p>
            <p id="stats-text">Σ</p>
          </div>
          <button>Join the conversation</button>
        </div>
      </Link>
    </div>
  );
};
