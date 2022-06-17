import { useState } from "react";

export const SortingBar = ({ handleSort }) => {
  return (
    <div className="sorting-bar">
      <div className="sorter">
        <button value="votes" onClick={handleSort}>
          Hot
        </button>
      </div>

      <div className="sorter">
        <button value="created_at" onClick={handleSort}>
          Fresh
        </button>
      </div>

      <div className="sorter">
        <button value="created_at" onClick={handleSort}>
          Author A-Z
        </button>
      </div>

      <div className="sorter">
        <button value="created_at" onClick={handleSort}>
          Title A-Z
        </button>
      </div>
    </div>
  );
};
