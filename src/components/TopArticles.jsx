import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { useState } from "react";
import { Loader } from "./Loader";

export const TopArticles = (props) => {
  const [topArticles, setTopArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.articles.sort((a, b) => a.votes - b.votes);
    const topFive = props.articles.slice(0, 6);
    setTopArticles(topFive);
    setLoading(false);
  }, [props.articles]);

  if (loading) return <Loader />;
  return (
    <>
      <p id="trending-title">Trending Articles</p>
      <div className="top-articles">
        <ul>
          {topArticles.map((article) => {
            return (
              <li>
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard top={true} {...article} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
