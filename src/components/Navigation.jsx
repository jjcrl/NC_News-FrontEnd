import { Link } from "react-router-dom";
import "../Css/nav.css";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link className="nav-item" to="/welcome">
          <img src="https://img.icons8.com/ios/25/ffffff/groups.png" />
        </Link>

        <Link className="nav-item" to="articles">
          <img src="https://img.icons8.com/ios/25/ffffff/a.png" />
        </Link>
        <Link className="nav-item" to="/article_editor">
          <img src="https://img.icons8.com/ios/25/ffffff/edit--v1.png" />
        </Link>
      </nav>
    </div>
  );
};
