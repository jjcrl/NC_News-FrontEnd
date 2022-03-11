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
  const [topicCount, setTopicCount] = useState();
  const [topicVoteCount, setTopicVoteCount] = useState();

  const { topic } = useParams();

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data);
    });

    fecthAllArticles().then((data) => {
      setArticle(data);
    });
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   const count = countTopics(articles, "topic");
  //   setTopicCount(count);
  //   const voteCount = countTopicVotes(articles, "topic");
  //   setTopicVoteCount(voteCount);
  // }, [articles]);

  if (loading) return <Loader />;

  return (
    <>
      {/* <TopArticles articles={articles} /> */}

      <main className="all-articles-container">
        {/* <div className="topic-container">
          {topics.map((topic, i) => {
            return (
              <TopicCard
                count={topicCount[topic.slug]}
                votes={topicVoteCount[topic.slug]}
                {...topic}
                key={i}
              />
            );
          })}
        </div> */}

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
    </>
  );
};
