import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { fecthAllArticles, fetchAllTopics } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Loader } from "./Loader";

export const Articles = () => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data);
    });

    fecthAllArticles(topic).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, [topic]);

  const handleTopic = (e) => {
    navigate(`/articles/topic/${e.target.value}`);
    setLoading(true);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="all-articles">
        <div className="topic-button-container">
          {topics.map((topic, index) => {
            return (
              <button key={index} value={topic.slug} onClick={handleTopic}>
                #{topic.slug}
              </button>
            );
          })}
        </div>
        <ul>
          {articles.map((article, index) => {
            return (
              <li key={index}>
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard {...article} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
