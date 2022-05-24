export const SortingBar = ({ handleSort }) => {
  return (
    <div className="sorting-bar">
      <div className="sorter">
        <button value="votes" onClick={handleSort}>
          Popular
        </button>
      </div>
      <div className="sorter">
        <button value="created_at" onClick={handleSort}>
          New
        </button>
      </div>
      <div className="sorter">
        <button onClick={handleSort} value="author">
          Author
        </button>
      </div>
      <div className="sorter">
        <button onClick={handleSort} value="title">
          Title
        </button>
      </div>
    </div>
  );
};
