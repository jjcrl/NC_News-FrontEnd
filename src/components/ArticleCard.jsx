import { Gen } from "./Gen";
import { Link } from "react-router-dom";

export const ArticleCard = (props) => {
  if (props.top) {
    const singleTotal =
      props.article.votes + Number(props.article.comment_count);

    const score = (singleTotal / props.gTotal) * 100;

    return (
      <div className="top-article-card">
        <div className="card-info">
          <p id="topic">{props.article.topic}</p>
          <Link to={`/articles/${props.article.article_id}`}>
            <p id="top4-title">{props.article.title}.</p>
            <p id="top4-article-card-author">@{props.article.author}</p>
            <p id="xs-top-snippet">"{props.article.snippet}..."</p>
          </Link>
        </div>

        <div className="top4-engagement-container">
          <div className="top4-engagement">
            <p id="xs-engagement">{props.article.votes}</p>
            <p id="xs-engagement-text">++</p>
          </div>
          <div className="top4-engagement">
            <p id="xs-engagement">{props.article.comment_count}</p>
            <p id="xs-engagement-text">≡</p>
          </div>
          <div className="top4-engagement-score">
            <p id="xs-engagement-score">{score.toFixed(0)}</p>
            <p id="xs-engagement-text-score">¤</p>
          </div>
        </div>
      </div>
    );
  } else {
    const symbols = [
      "!",
      "@",
      "£",
      "$",
      "%",
      "^",
      "&",
      "*",
      "_",
      "-",
      "|",
      "~",
      "`",
      "±",
      "/",
      "?",
      "<",
      ">",
      "+",
      ";",
      ":",
      "/",
      "§",
      "⁂",
      "‡",
      "፠",
      "※",
      "}",
      "{",
      "(",
      ")",
      "#",
      ".",
      ",",
      "¤",
      " ℳ ",
      "ℬ",
      "ℌ",
      "ℜ",
      "½",
      "ä",
      "¶",
      "▒",
      "░",
      "░",
      "░",
      "↸",
      "▧",
      "▧",
      "▨",
      "▨",
      "▤",
      "▤",
      "▥",
      "▥",
      " ᶨ",
      "◓",
      "◒",
      "␚",
      "⊙",
      "◎",
      "“",
      "”",
      "≄",
      "◘",
      "¶",
      "▒",
      "░",
      "░",
      "░",
      "↸",
      "▧",
      "▧",
      "▨",
      "▨",
      "▤",
      "▤",
      "▥",
      "▥",
      " ᶨ",
      "◓",
      "◒",
      "␚",
      "⊙",
      "◎",
      "“",
      "”",
      "≄",
      "◘",
    ];

    let string = "";

    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * symbols.length);
      string += symbols[random];
    }

    let topic = props.article.topic;

    const randomStartIndex = Math.ceil((Math.random() * string.length) / 5);

    const done =
      string.slice(0, randomStartIndex) +
      topic +
      string.slice(randomStartIndex);

    return (
      <div className="article-card">
        <div id="artwork">
          <Gen single={props.single} />
        </div>
        <div className="card-info-main">
          <p id="article-card-topic">✧{done}</p>
          <p id="title">
            {props.article.title}
            {props.article.title[props.article.title.length - 1] === "?"
              ? null
              : "."}
          </p>
          <p id="article-card-author">@{props.article.author}</p>
        </div>
      </div>
    );
  }
};
