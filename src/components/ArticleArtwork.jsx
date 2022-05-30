import "../Css/artwork.css";

export const ArticleArtwork = () => {
  const arr = [];
  const cellA = [];

  const letters = [
    "A",
    "a",
    "B",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "g",
    "H",
    "h",
    "I",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "M",
    "N",
    "n",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "V",
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
  ];

  let n = 0;

  for (let i = 0; i < 50; i++) {
    const rS = Math.floor(Math.random() * symbols.length);
    arr.push(symbols[rS]);
    const rL = Math.floor(Math.random() * letters.length);
    arr.push(letters[rL]);
  }

  for (let i = 0; i < 100; i++) {
    n = Math.floor(Math.random() * 100);
    cellA.push(n);
  }

  return (
    <div className="gen-grid-v2">
      {arr.map((char, i) => {
        if (cellA[i] >= 50) {
          return <span>{arr[cellA[i]]}</span>;
        } else {
          return <span id="large">{arr[cellA[i]]}</span>;
        }

        // if (cellA[i] >= 8) {
        //   return <span>{char}</span>;
        // } else if (cellA[i] >= 7) {
        //   return <span id="large">{char}</span>;
        // } else if (cellA[i] <= 5) {
        //   return <span>{char[i]}</span>;
        // } else if (cellA[i] <= 3) {
        //   return <span id="large">{char[i]}</span>;
        // } else {
        //   return <span>{char}</span>;
        // }
      })}
    </div>
  );
};
