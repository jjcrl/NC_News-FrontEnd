import { Link } from "react-router-dom";

export const TopicCard = (props) => {
  return (
    <div className="single-topic-card">
      <Link to={`/articles/topic/${props.slug}`}>
        <p id="topic-title">#{props.slug}</p>
        <p id="topic-description">{props.description}</p>
        <div className="stats-container">
          <div className="topic-count">
            <p id="stats">{props.count}</p>
            <p id="stats-text">Posts</p>
          </div>
          <div className="topic-votes">
            <p id="stats">{props.votes}</p>
            <p id="stats-text">Votes</p>
          </div>
          <button>Join the conversation</button>
        </div>
      </Link>
    </div>
  );
};
