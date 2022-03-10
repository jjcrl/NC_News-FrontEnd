import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { postComment } from "../utils/api";

export const PostComment = ({ id, setNewComment }) => {
  const [comment, setComment] = useState({
    body: "",
    user: "weegembump",
    id: id,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleComment(e) {
    const comment = e.target.value;
    if (comment.length < 2) {
      console.log("too short");
    }
    setComment((currState) => ({
      ...currState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    postComment(comment).then((data) => {
      setNewComment(data);
      setComment((currState) => ({
        ...currState,
        body: "",
      }));
    });
  }

  if (loading) return <Loader />;

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit}>
        <fieldset id="feildset">
          <legend>comment</legend>
          <input
            id="body"
            type="text"
            value={comment.body}
            onChange={handleComment}
          />
          <button type="submit" onClick={handleSubmit}>
            post
          </button>
        </fieldset>
      </form>
    </div>
  );
};
