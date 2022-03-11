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
  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id).then((data) => {
      setArticle(data);
    });
    setLoading(false);
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="single-article">
      <ArticleCard
        votes={props.votes}
        count={props.count[article.topic]}
        single={true}
        {...article}
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

// votes={topicVoteCount} count={topicCount}
