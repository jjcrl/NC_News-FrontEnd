import { useState } from "react";
import { patchVotes } from "../utils/api";
import { useEffect } from "react";
import { Loader } from "./Loader";

export const Voting = (props) => {
  const [votes, setVotes] = useState();
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVotes(props.votes);
    setLoading(false);
  }, [props.votes]);

  if (loading) return <Loader />;

  function handleVote() {
    console.log("clicked");
    setVotes((currVotes) => currVotes + 1);
    patchVotes(1, props.id);
    setToggle(true);
  }

  return (
    <div className={props.comment ? "voting-comment" : "voting"}>
      <div className="voting-value">
        <p>{votes}</p>
      </div>
      <div className={props.comment ? "voting-comment-text" : "voting-text"}>
        <button
          onClick={() => {
            handleVote();
          }}
          id="v-text"
          disabled={toggle}
        >
          ++
        </button>
      </div>
    </div>
  );
};
