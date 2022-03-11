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
    <div className={props.comment ? "voting-comment" : "voting"}>
      <div
        className={props.comment ? "voting-comment-buttons" : "voting-buttons"}
      >
        <button
          onClick={() => {
            handleVote(1);
          }}
          disabled={upVoteDisable}
        >
          <img src="https://img.icons8.com/ios-filled/37/000000/up--v1.png" />{" "}
        </button>

        <button
          disabled={downVoteDisable}
          onClick={() => {
            handleVote(-1);
          }}
        >
          <img src="https://img.icons8.com/ios-filled/37/000000/down--v1.png" />{" "}
        </button>
      </div>

      <div className={props.comment ? "voting-comment-text" : "voting-text"}>
        <p>{props.votes}</p>
        <p id="v-text">votes</p>
      </div>
    </div>
  );
};
