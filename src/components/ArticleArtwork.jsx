import "../Css/artwork.css";

export const ArticleArtwork = () => {
  const arr = [];
  const cellA = [];
  const letters = [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
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
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
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
    "u",
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
  ];
  let n = 0;

  for (let i = 0; i < 54; i++) {
    const rS = Math.floor(Math.random() * symbols.length);
    arr.push(symbols[rS]);
    const rL = Math.floor(Math.random() * letters.length);
    arr.push(letters[rL]);
  }

  for (let i = 0; i < 108; i++) {
    n = Math.floor(Math.random() * 10);
    cellA.push(n);
  }

  return (
    <div className="gen-grid-v2">
      {arr.map((n, i) => {
        if (cellA[i] >= 5) {
          return <span>{n}</span>;
        } else if (cellA[i] < 2) {
          return <span id="void"></span>;
        } else if (cellA[i] === 2) {
          return <span>.</span>;
        } else {
          return <span id="void">{n[i]}</span>;
        }
      })}
    </div>
  );
};
