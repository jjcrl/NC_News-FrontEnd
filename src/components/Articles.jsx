import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fecthAllArticles, fetchAllTopics } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Loader } from "./Loader";
import { SortingBar } from "./SortingBar";
import { TopArticles } from "./TopArticles";

import "../Css/articles.css";

export const Articles = () => {
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
        {/* <div className="topper">
          <p id="topper-content"> +.. ｡*+¶ ‰ ++^ ¤ ✧･ﾟ : * ✧･ﾟ: *.｡ .:*☆.</p>
          <p id="topper-content">。°。°。°。°。°。°。°。°。°。°。°</p>
        </div> */}

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
          </div>
        </main>
      </div>
    </>
  );
};

// <div className="topics-container">
// <ul>
//   {topics.map((topic, i) => {
//     return (
//       <Link key={i} to={`/articles/topic/${topic.slug}`}>
//         <li>-{topic.slug}-</li>
//       </Link>
//     );
//   })}{" "}
// </ul>
// </div>
