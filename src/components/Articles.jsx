import { useState, useEffect } from "react";
import { fecthAllArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fecthAllArticles().then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>loading ...</p>;

  return (
    <div className="all-articles">
      <ul>
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <ArticleCard {...article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
