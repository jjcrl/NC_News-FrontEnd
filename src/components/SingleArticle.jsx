import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Comments } from "./Comments";
import { Loader } from "./Loader";
import { Voting } from "./Voting";
import { ShowWrapper } from "./ShowWrapper";

export const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="single-article">
      <ArticleCard single={true} {...article} />
      <Voting id={id} votes={article.votes} />
      <ShowWrapper>
      <Comments id={id} />
      </ShowWrapper>
    </div>
  );
};
