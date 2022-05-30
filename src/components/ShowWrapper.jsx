import { useState } from "react";

export const ShowWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div className="toggle-container">
      <button id="toggle-comments" onClick={toggleOpen}>
        {isOpen ? "~ hide ~" : "~ discussion ~"}
      </button>
      {isOpen && children}
    </div>
  );
};
