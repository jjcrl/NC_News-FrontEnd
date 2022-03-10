import "../Css/artwork.css";

export const Gen = (props) => {
  const cellA = [];

  const arr = [];

  //52
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
  //42

  for (let i = 0; i < 58; i++) {
    const rS = Math.floor(Math.random() * symbols.length);
    arr.push(symbols[rS]);
    const rL = Math.floor(Math.random() * letters.length);
    arr.push(letters[rL]);
  }

  let n = 0;

  for (let i = 0; i < 117; i++) {
    n = Math.floor(Math.random() * 10);
    cellA.push(n);
  }

  // return (
  //   <div className="gen-grid">
  //     {arr.map((n, i) => {
  //       if (cellA[i] < 3) {
  //         return <span>{n}</span>;
  //       } else {
  //         return <span></span>;
  //       }
  //     })}
  //   </div>
  // );

  return (
    <div className="gen-grid">
      {cellA.map((n, i) => {
        if (n > 5) {
          return <span key={i} id="cell-1"></span>;
        } else if (n > 3) {
          return <span key={i} id="cell-2"></span>;
        } else {
          return <span key={i} id="cell-3"></span>;
        }
      })}
    </div>
  );
};
