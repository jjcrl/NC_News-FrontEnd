import { useState } from "react";
import { patchVotes } from "../utils/api";

export const Voting = (props) => {
  const [votes, setVotes] = useState(props.votes);
  const [upVoteDisable, setUpVoteDisable] = useState(false);
  const [downVoteDisable, setdownVoteDisable] = useState(false);

  const handleVote = (vote) => {
    if (vote === 1) {
      setUpVoteDisable(true);
      setVotes((currVotes) => currVotes + 1);
    } else if (vote === -1) {
      setdownVoteDisable(true);
      setVotes((currVotes) => currVotes - 1);
    }
    patchVotes(vote, props.id);
  };

  return (
    <div className="voting">
      <p>{votes}</p>
      <button
        onClick={() => {
          handleVote(1);
        }}
        disabled={upVoteDisable}
      >
        up
      </button>

      <button
        disabled={downVoteDisable}
        onClick={() => {
          handleVote(-1);
        }}
      >
        down
      </button>
    </div>
  );
};
