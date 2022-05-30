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

  if (props.main !== true) {
    return (
      <div className="single-topic-card">
        <Link to={`/articles/topic/`}>
          <div id="topic-topper">
            <p id="topic-title">✧ {props.topic.slug}</p>
            <p id="topic-description">{props.topic.description}</p>
          </div>

          <div className="stats-container">
            <div className="stats">
              <p id="stats">{props.count}k</p>
              <p id="stats-text">¶osts</p>
            </div>
            <div className="stats">
              <p id="stats">{points}k</p>
              <p id="stats-text">p¤ints</p>
            </div>
            <button>Join The Conversation</button>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="single-topic-card-main">
        <Link to={`/articles/topic/${props.topic.slug}`}>
          <p id="topic-title-main">{props.topic.slug}</p>
        </Link>
        <p id="topic-description-main">{props.topic.description}</p>
      </div>
    );
  }
};
