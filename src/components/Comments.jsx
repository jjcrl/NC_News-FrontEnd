import { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { Loader } from "./Loader";

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleComments(id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="comments-container">
      <ul>
        {comments.map((comment) => {
          return (
            <li>
              <CommentCard {...comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
