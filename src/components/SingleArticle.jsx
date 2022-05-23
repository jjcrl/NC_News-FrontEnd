import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllTopics, fetchArticle } from "../utils/api";
import { SingleArticleCard } from "./SingleArticleCard";
import { Comments } from "./Comments";
import { Loader } from "./Loader";
import { Voting } from "./Voting";
import { ShowWrapper } from "./ShowWrapper";
import { PostComment } from "./PostComment";

export const SingleArticle = (props) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState();
  const [topic, setTopic] = useState();
  const [nTopics, setNTopics] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id).then((data) => {
      setArticle(data);
    });
    fetchAllTopics().then((data) => {
      setNTopics(data.length);
      for (let i = 0; i < data.length; i++) {
        if (article.topic === data[i].slug) {
          setTopic(data[i]);
        }
      }
    });
    setLoading(false);
  }, [id, article.topic]);

  if (loading) return <Loader />;

  const engagementTotals = Object.values(props.votes).reduce((p, c) => {
    return p + c;
  }, 0);

  return (
    <div className="single-article">
      <SingleArticleCard
        topic={topic}
        article={article}
        posts={props.posts[article.topic]}
        totalvotes={props.votes[article.topic]}
        gTotal={engagementTotals}
        nTopics={nTopics}
      />
      <Voting id={id} votes={article.votes} />
      <ShowWrapper>
        <PostComment setNewComment={setNewComment} id={id} />
        <Comments
          id={id}
          newComment={newComment}
          setNewComment={setNewComment}
        />
      </ShowWrapper>
    </div>
  );
};
