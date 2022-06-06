import { useState } from "react";
import { patchVotes } from "../utils/api";
import { useEffect } from "react";
import { Loader } from "./Loader";

export const Voting = (props) => {
  const [votes, setVotes] = useState();
  const [togglePos, setTogglePos] = useState(false);
  const [toggleNeg, setToggleNeg] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVotes(props.votes);
    setLoading(false);
  }, [props.votes]);

  if (loading) return <Loader />;

  function handleVote(value) {
    setVotes((currVotes) => currVotes + value);
    patchVotes(value, props.id);
    value === 1 ? setTogglePos(true) : setToggleNeg(true);
  }

  return (
    <div className={props.comment ? "voting-comment" : "voting"}>
      <div className="voting-value">
        <p>{votes}</p>
      </div>
      <div className={props.comment ? "voting-comment-text" : "voting-text"}>
        <button
          onClick={() => {
            handleVote(1);
          }}
          id="v-text"
          disabled={togglePos}
          value="pos"
        >
          +
        </button>
        <button
          onClick={() => {
            handleVote(-1);
          }}
          id="v-text-neg"
          disabled={toggleNeg}
        >
          −
        </button>
      </div>
    </div>
  );
};
