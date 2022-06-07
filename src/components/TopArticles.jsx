import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { useState } from "react";
import { Loader } from "./Loader";
import { fecthAllArticles } from "../utils/api";
import { Gen } from "./Gen";

export const TopArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [topArticle, setTopArticle] = useState([]);
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

      const top = topFive[0];

      const topFour = topFive.slice(1, 5);

      setArticles(topFour);
      setTopArticle(top);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  const singleTotal = topArticle.votes + Number(topArticle.comment_count);
  const score = (singleTotal / gTotal) * 100;

  return (
    <>
      <p id="topper-title">~ Top Posts ~</p>
      <div className="top-articles">
        <Link to={`/articles/${topArticle.article_id}`}>
          <div className="big-top-article-card">
            <Gen top={true} />
            <div className="card-info-big">
              <p id="topic">~ {topArticle.topic} ~</p>
              <p id="top-title">{topArticle.title}.</p>
              <p id="top-article-card-author">@{topArticle.author}</p>
            </div>

            <div className="engagement-container">
              <div className="engagement">
                <p id="engagement">{topArticle.votes}</p>
                <p id="engagement-text">++</p>
              </div>
              <div className="engagement">
                <p id="engagement">{topArticle.comment_count}</p>
                <p id="engagement-text">..^</p>
              </div>
              <div className="engagement">
                <p id="engagement">{score.toFixed(1)}</p>
                <p id="engagement-text">¤ </p>
              </div>
            </div>
          </div>
        </Link>

        <ul>
          {articles.map((article, i) => {
            return (
              <li key={i}>
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard
                    gTotal={gTotal}
                    number={i + 2}
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
