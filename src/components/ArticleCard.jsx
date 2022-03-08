import { useState } from "react";
import { formatDate } from "../utils/helperFuncs";
import { Gen } from "./Gen";
import { useParams } from "react-router-dom";
import { patchVotes } from "../utils/api";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);
  const [votes, setVotes] = useState(props.votes);
  const [upVoteDisable, setUpVoteDisable] = useState(false);
  const [downVoteDisable, setdownVoteDisable] = useState(false);

  const handleVote = (vote) => {
    if (vote === 1) {
      setUpVoteDisable(true);
    } else if (vote === -1) {
      setdownVoteDisable(true);
    }
    const id = props.article_id;
    patchVotes(vote, id).then((data) => {
      setVotes(data);
    });
  };

  return (
    <div className={props.single ? "single-article-card" : "article-card"}>
      <p
        className={
          props.single ? "single-article-card-topic" : "article-card-topic"
        }
      >
        {props.topic}
      </p>
      <p id={props.single ? "single-title" : "title"}>{props.title}</p>

      <div id="artwork">
        <Gen single={props.single} />
      </div>

      {/* <div id={props.single ? "details-container" : "single-details-container"}>
        <ul id={props.single ? "single-creation" : "creation"}>
          <li>a {props.author}</li>
          <li>d {date}</li>
        </ul>

        <ul id={props.single ? "single-engagment" : "engagment"}>
          <li>v {props.votes}</li>
          <li>c {props.comment_count}</li>
        </ul>
      </div> */}

      <div className="engagement-container">
        {props.single ? <p className="single-card-body">{props.body}</p> : null}
        {props.single ? (
          <ul id={props.single ? "single-engagment" : "engagment"}>
            <li>votes {votes}</li>
          </ul>
        ) : null}
      </div>

      <div className="voting">
        {props.single ? (
          <>
            <button
              onClick={() => {
                handleVote(1);
              }}
              disabled={upVoteDisable}
            >
              up
            </button>{" "}
            <button
              disabled={downVoteDisable}
              onClick={() => {
                handleVote(-1);
              }}
            >
              down
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};
