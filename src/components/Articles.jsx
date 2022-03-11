import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fecthAllArticles, fetchAllTopics } from "../utils/api";
import { countTopics, countTopicVotes } from "../utils/helperFuncs";
import { ArticleCard } from "./ArticleCard";
import { Loader } from "./Loader";
import { TopArticles } from "./TopArticles";
import { TopicCard } from "./TopicCard";

export const Articles = () => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    fecthAllArticles(topic).then((data) => {
      setArticle(data);
    });
    setLoading(false);
  }, [topic]);

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <TopArticles articles={articles} />
      <div className="main-container">
        <div className="topics-container">
          <ul>
            {topics.map((topic, i) => {
              return (
                <Link to={`/articles/topic/${topic.slug}`}>
                  <li>#{topic.slug}</li>
                </Link>
              );
            })}{" "}
          </ul>
        </div>

        <main className="all-articles-container">
          <div className="sorting">
            <p>sorting</p>
          </div>

          <div className="all-articles">
            <ul>
              {articles.map((article, i) => {
                return (
                  <li key={i}>
                    <Link to={`/articles/${article.article_id}`}>
                      <ArticleCard {...article} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};
