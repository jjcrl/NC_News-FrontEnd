import { useState } from "react";
import { formatDate } from "../utils/helperFuncs";
import { Gen } from "./Gen";
import { patchVotes } from "../utils/api";

export const ArticleCard = (props) => {
  const date = formatDate(props.created_at);

  return (
    <div className={props.single ? "single-article-card" : "article-card"}>
      <div id="artwork">
        <Gen single={props.single} />
      </div>

      <p
        className={
          props.single ? "single-article-card-topic" : "article-card-topic"
        }
      >
        {props.topic}
      </p>

      <p id={props.single ? "single-title" : "title"}>{props.title}</p>

      {props.single ? (
        <div className="creation">
          <p>{props.author}</p>
          <p>{date}</p>
        </div>
      ) : null}

      {props.single ? <p className="single-card-body">{props.body}</p> : null}
    </div>
  );
};
