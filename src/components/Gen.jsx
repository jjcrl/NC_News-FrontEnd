export const Gen = (props) => {
  const arr = [];

  let n = 0;

  for (let i = 0; i < 104; i++) {
    n = Math.floor(Math.random() * 10);
    arr.push(n);
  }

  return (
    <div className={props.single ? "single-grid-container" : "gen-grid"}>
      {arr.map((n) => {
        if (n > 5) {
          return <span id="cell-1"></span>;
        } else if (n > 3) {
          return <span id="cell-2"></span>;
        } else {
          return <span id="cell-3"></span>;
        }
      })}
    </div>
  );
};
