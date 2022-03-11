import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { useState } from "react";

export const TopArticles = ({ articles }) => {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    articles.sort((a, b) => {
      return a.votes - b.votes;
    });
    const sorted = articles.reverse();
    setTopArticles([sorted[0], sorted[1], sorted[2]]);
  }, [articles]);

  return (
    <div className="top-articles">
      <fieldset>
        <legend>top articles</legend>
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
      </fieldset>
    </div>
  );
};
