import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { useState } from "react";
import { Loader } from "./Loader";
import { fecthAllArticles, fetchArticle } from "../utils/api";
import { Gen } from "./Gen";
import "../Css/TopArticles.css";

export const TopArticles = () => {
  const [articles, setArticles] = useState([]);
  const [topArticle, setTopArticle] = useState([]);
  const [gTotal, setGTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchSnippet = async (id) => {
    const article = await fetchArticle(id);
    const body = article.body;
    const index = body.indexOf(". ");
    const sentence = body.substring(0, index + 1);
    return sentence.length > 100
      ? sentence.substring(0, sentence.length / 3)
      : sentence;
  };

  const addSnippet = async (article, id) => {
    const snippet = await fetchSnippet(id);
    article.snippet = snippet;
    return article;
  };

  useEffect(() => {
    fecthAllArticles()
      .then((articles) => {
        const sorted = articles.sort((a, b) => {
          return (
            b.votes +
            Number(b.comment_count) -
            a.votes +
            Number(a.comment_count)
          );
        });
        return sorted;
      })
      .then((sorted) => {
        const topArticles = sorted.slice(0, 5);
        return topArticles;
      })
      .then((topArticles) => {
        const articlesWsnippets = topArticles.map((article) =>
          addSnippet(article, article.article_id)
        );
        return Promise.all(articlesWsnippets);
      })
      .then((preppedArticles) => {
        const [top] = preppedArticles;
        setTopArticle(top);
        const topFour = preppedArticles.slice(1, 5);
        setArticles(topFour);
        const grandtotal = preppedArticles.reduce((c, p) => {
          return c + p.votes + Number(p.comment_count);
        }, 0);
        setGTotal(grandtotal);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  const singleTotal = topArticle.votes + Number(topArticle.comment_count);
  const score = (singleTotal / gTotal) * 100;

  return (
    <>
      <p id="topper-title">Top Posts</p>
      <div className="top-articles">
        <div className="big-top-article-card">
          {/* <Gen top={true} /> */}
          <Link to={`/articles/${topArticle.article_id}`}>
            <div className="card-info-big">
              <p id="topic">{topArticle.topic}</p>
              <p id="top-title">{topArticle.title}.</p>
              <p id="top-article-card-author">@{topArticle.author}</p>
              <p id="top-snippet">"{topArticle.snippet}" ...</p>
            </div>
          </Link>

          <div className="engagement-container">
            <div className="engagement">
              <p id="engagement">{topArticle.votes}</p>
              <p id="engagement-text">++</p>
            </div>
            <div className="engagement">
              <p id="engagement">{topArticle.comment_count}</p>
              <p id="engagement-text">≡</p>
            </div>
            <div className="engagement-score">
              <p id="engagement-score">{score.toFixed(0)}</p>
              <p id="engagement-text-score">¤</p>
            </div>
          </div>
        </div>

        <ul>
          {articles.map((article, i) => {
            return (
              <li key={i}>
                <ArticleCard gTotal={gTotal} top={true} article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
