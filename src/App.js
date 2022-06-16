import { useEffect, useState } from "react";
import "./Css/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { Articles } from "./components/Articles";
import { SingleArticle } from "./components/SingleArticle";
import { fecthAllArticles } from "./utils/api";
import { countTopics, countTopicEngagemet } from "./utils/helperFuncs";
import { Loader } from "./components/Loader";
import { ArticleEditor } from "./components/ArticleEditor";

function App() {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topicCount, setTopicCount] = useState({ posts: [] });
  const [topicVoteCount, setTopicVoteCount] = useState({ votes: [] });

  useEffect(() => {
    fecthAllArticles().then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const count = countTopics(articles, "topic");
    setTopicCount((currState) => ({
      ...currState,
      posts: count,
    }));

    const votes = countTopicEngagemet(articles, "topic");
    setTopicVoteCount((currState) => ({
      ...currState,
      votes: votes,
    }));
  }, [articles]);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" render element={<Dashboard />} />
          <Route
            path="/articles"
            element={
              <Articles posts={topicCount.posts} votes={topicVoteCount.votes} />
            }
          />
          <Route
            path="/article_editor"
            element={
              <ArticleEditor
                posts={topicCount.posts}
                votes={topicVoteCount.votes}
              />
            }
          />
          <Route
            path="/articles/topic/:topic"
            element={
              <Articles posts={topicCount.posts} votes={topicVoteCount.votes} />
            }
          />
          <Route
            path="/articles/:id"
            element={
              <SingleArticle
                posts={topicCount.posts}
                votes={topicVoteCount.votes}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
