export const Gen = () => {
  const arr = [];

  let n = 0;

  for (let i = 0; i < 42; i++) {
    n = Math.floor(Math.random() * 10);
    arr.push(n);
  }

  console.log(arr);
  return (
    <div className="gen-grid">
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
