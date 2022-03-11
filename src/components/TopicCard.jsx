import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllTopics } from "../utils/api";
import { Loader } from "./Loader";

export const TopicCard = (props) => {
  const [topic, setTopic] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTopics().then((topics) => {
      topics.forEach((topic) => {
        if (props.topic === topic.topic) {
          setTopic(topic);
        }
      });
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;
  console.log(topic);

  return (
    <div className="single-topic-card">
      <Link to={`/articles/topic/${topic.slug}`}>
        <p id="topic-title">#{topic.slug}</p>
        <p id="topic-description">{topic.description}</p>

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
