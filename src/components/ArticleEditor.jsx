import React, { useEffect, useState } from "react";
import { fetchAllTopics } from "../utils/api";
import "../Css/ArticleEditor.css";
import { Loader } from "./Loader";

export const ArticleEditor = (props) => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenTopic, setChosenTopic] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data);
    });
    setLoading(false);
  }, []);

  const topicSelect = (e) => {
    console.log(e.target.value);
    setChosenTopic(e.target.value);
  };

  const validateTitle = (e) => {
    if (e.target.value.length > 10) {
      setTitle(e.target.value);
    }
  };

  const validateBody = (e) => {
    if (e.target.value.length > 100) {
      setBody(e.target.value);
    }
  };

  if (loading) return <Loader />;

  console.log(props);
  return (
    <div className="article-editor">
      <p id="editor-title">Create new Post</p>

      <div className="content-creator">
        <p id="creator-info" style={{ textAlign: "center" }}>
          Your post will need to belong to a group of other convesations. Join
          one of make your own (Coming Soon).
        </p>

        <div className="topic-options">
          {topics.map((topic, i) => (
            <div
              onClick={topicSelect}
              className={
                chosenTopic === topic.slug
                  ? "topic-option-active"
                  : "topic-option"
              }
              key={`topic-${topic.slug}`}
            >
              <button value={topic.slug}>{topic.slug}</button>
              <div className="creator-stat-container">
                <div className="topic-option-stats">
                  <p id="stat">{props.votes[topic.slug]}</p>
                  <p id="stat-symbol">¤</p>
                </div>

                <div className="topic-option-stats">
                  <p id="stat">{props.posts[topic.slug]}k</p>
                  <p id="stat-symbol">¶</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form>
          <textarea
            id={title ? "v-new-title" : "new-title"}
            rows={1}
            defaultValue={"Title"}
            contentEditable={false}
            onChange={validateTitle}
          />

          <textarea
            id={body ? "v-new-body" : "new-body"}
            defaultValue={"¶..."}
            onChange={validateBody}
          />
          <div className="finishing-buttons">
            <button>Draft</button>
            <button id="post">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};
