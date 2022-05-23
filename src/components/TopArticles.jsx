import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { useState } from "react";
import { Loader } from "./Loader";
import { fecthAllArticles } from "../utils/api";

export const TopArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gTotal, setGTotal] = useState();

  useEffect(() => {
    fecthAllArticles().then((data) => {
      data.sort((a, b) => {
        return (
          b.votes + Number(b.comment_count) - a.votes + Number(a.comment_count)
        );
      });
      const topFive = data.slice(0, 5);

      const grandtotal = topFive.reduce((c, p) => {
        return c + p.votes + Number(p.comment_count);
      }, 0);

      setGTotal(grandtotal);
      setArticles(topFive);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <div className="top-articles">
        <ul>
          {articles.map((article, i) => {
            return (
              <li key={i}>
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard
                    gTotal={gTotal}
                    key={i}
                    top={true}
                    article={article}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
