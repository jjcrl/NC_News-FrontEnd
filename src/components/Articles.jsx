import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fecthAllArticles, fetchAllTopics } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Loader } from "./Loader";
import { SortingBar } from "./SortingBar";
import { TopArticles } from "./TopArticles";

import "../Css/articles.css";
import "../Css/App.css";

import { TopicCard } from "./TopicCard";

export const Articles = ({ posts, votes }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fecthAllArticles(topic, null).then((data) => {
      setArticles(data);
    });
    setLoading(false);
  }, [topic]);

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data);
    });
  }, [topic, articles]);

  const handleSort = (e) => {
    let sort = e.target.value;
    setLoading(true);
    fecthAllArticles(null, sort).then((data) => {
      setArticles(data);
    });
    setLoading(false);
  };

  if (loading) return <Loader />;
  return (
    <>
      <div className="main-container">
        <TopArticles />
        <main className="all-articles-container">
          <SortingBar handleSort={handleSort} />

          <div className="all-articles">
            <ul>
              {articles.map((article, i) => {
                return (
                  <li key={i}>
                    <Link to={`/articles/${article.article_id}`}>
                      <ArticleCard key={i} article={article} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="topic-bar">
              {/* <p id="topic-bar-title">Currrent Conversations</p> */}
              {topics.map((topic, i) => {
                return (
                  <TopicCard
                    posts={posts[topic.slug]}
                    votes={votes[topic.slug]}
                    topic={topic}
                    main={true}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
