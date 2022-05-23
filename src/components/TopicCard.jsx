import { Link } from "react-router-dom";
import { Loader } from "./Loader";

export const TopicCard = (props) => {
  if (!props.topic) return <Loader />;

  const n = props.nTopics;

  const t = props.gTotal;

  const v = props.votes;

  const postions = n / 100;

  const percent = Math.floor((v / t) * 100);

  const points = props.votes / 10;

  return (
    <div className="single-topic-card">
      <Link to={`/articles/topic/`}>
        <p id="topic-title">#{props.topic.slug}</p>
        <p id="topic-description">{props.topic.description}</p>
        <div className="stats-container">
          <div className="stats">
            <p id="stats">{props.count}k</p>
            <p id="stats-text">¶osts</p>
          </div>
          <div className="stats">
            <p id="stats">{points}k</p>
            <p id="stats-text">p¤ints</p>
          </div>
          {/* <div className="stats">
            <p id="stats">{percent}</p>
            <p id="stats-text">‰</p>
          </div> */}
          <button>Join the conversation</button>
        </div>
      </Link>
    </div>
  );
};
