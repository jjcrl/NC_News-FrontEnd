import { useState, useEffect } from "react";
import { fecthAllArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Loader } from "./Loader";

export const Articles = () => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fecthAllArticles().then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

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
