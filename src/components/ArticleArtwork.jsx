import "../Css/artwork.css";

export const ArticleArtwork = () => {
  const arr = [];
  const cellA = [];

  const letters = [
    "a",
    "C",
    "c",
    "D",
    "d",
    "e",
    "F",
    "f",
    "g",
    "H",
    "h",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "M",
    "n",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "T",
    "t",
    "U",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
  ];
  //32
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

  let n = 0;

  for (let i = 0; i < 19; i++) {
    const rS = Math.floor(Math.random() * symbols.length);
    arr.push(symbols[rS]);
  }

  for (let i = 0; i < 5; i++) {
    const rL = Math.floor(Math.random() * letters.length);
    arr.push(letters[rL]);
  }

  console.log(arr);

  for (let i = 0; i < 24; i++) {
    n = Math.floor(Math.random() * 10);
    cellA.push(n);
  }

  console.log(cellA);

  return (
    <div className="gen-grid-v2">
      {arr.map((char, i) => {
        if (cellA[i] <= 3) {
          return <span>{char}</span>;
        } else if (cellA[i] <= 6) {
          return <span id="large">{char}</span>;
        } else if (cellA[i] > 7) {
          return <span id="xlarge">{char}</span>;
        } else {
          return <span id="empty"></span>;
        }
      })}
    </div>
  );
};
