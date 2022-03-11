import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllTopics, fetchArticle } from "../utils/api";
import { countTopics, countTopicVotes } from "../utils/helperFuncs";
import { ArticleCard } from "./ArticleCard";
import { TopicCard } from "./TopicCard";
import { Comments } from "./Comments";
import { Loader } from "./Loader";
import { Voting } from "./Voting";
import { ShowWrapper } from "./ShowWrapper";
import { PostComment } from "./PostComment";

export const SingleArticle = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState();

  const [totalPosts, setTotalPosts] = useState();
  const [totalVotes, setTotalVotes] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id).then((data) => {
      setArticle(data);
    });
  }, [id]);

  useEffect(() => {
    setTotalPosts(props.count[article.topic]);
    setTotalVotes(props.votes[article.topic]);
    setLoading(false);
  }, [props.count, props.votes]);

  if (loading) return <Loader />;

  return (
    <div className="single-article">
      <ArticleCard single={true} {...article} />
      <TopicCard count={totalPosts} votes={totalVotes} />
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

// votes={topicVoteCount} count={topicCount}
