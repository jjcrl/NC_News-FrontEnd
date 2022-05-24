import "../Css/artwork.css";
export const Gen = (props) => {
  const cellA = [];
  let n = 0;

  for (let i = 0; i < 96; i++) {
    n = Math.floor(Math.random() * 10);
    cellA.push(n);
  }
  return (
    <div className={props.top ? "gen-grid-top" : "gen-grid"}>
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
