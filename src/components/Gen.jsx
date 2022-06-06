import "../Css/artwork.css";
export const Gen = (props) => {
  const cellA = [];
  let n = 0;

  // for (let i = 0; i < 49; i++) {
  //   n = Math.floor(Math.random() * 10);
  //   cellA.push(n);
  // }

  for (let i = 0; i < 117; i++) {
    n = Math.floor(Math.random() * 100);
    cellA.push(n);
  }

  // const array = [];
  // let max = cellA.length - 1;
  // const square = Math.sqrt(cellA.length);

  // array.push(max);

  // while (max > square) {
  //   max = max - square;
  //   array.push(max);
  // }

  return (
    <div className={props.top ? "gen-grid-top" : "gen-grid"}>
      {cellA.map((n, i) => {
        if (n >= 50) {
          return <span id={`cell-${i}`} className="cell-1"></span>;
        } else if (n >= 30) {
          return <span id={`cell-${i}`} className="cell-2"></span>;
        } else if (n <= 2) {
          return <span id={`cell-${i}`} className="cell-4"></span>;
        } else {
          return <span id={`cell-${i}`} className="cell-3"></span>;
        }
        // if (n <= 6) {
        //   return <span id={`cell-${i}`} className="fill"></span>;
        // } else if (n <= 5) {
        //   return <span id={`cell-${i}`} className="fill"></span>;
        // } else {
        //   return <span id={`cell-${i}`} className="empty"></span>;
        // }
      })}
    </div>
  );
};
