import { Link } from "react-router-dom";
import "../Css/nav.css";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link className="nav-item" to="dashboard">
          <img src="https://img.icons8.com/ios/35/ffffff/home--v1.png" />
          {/* <p id="nav-text">Dashboard</p> */}
        </Link>
        <Link className="nav-item" to="articles">
          <img src="https://img.icons8.com/ios/35/ffffff/a.png" />
          {/* <p id="nav-text">Articles</p> */}
        </Link>
        <Link className="nav-item" to="/article_editor">
          <img src="https://img.icons8.com/ios/35/ffffff/edit--v1.png" />
          {/* <p id="nav-text">Editor</p> */}
        </Link>
        <Link className="nav-item" to="/welcome">
          <img src="https://img.icons8.com/ios/35/ffffff/groups.png" />
          {/* <p id="nav-text">Groups</p> */}
        </Link>
        <Link className="nav-item" to="/">
          <img src="https://img.icons8.com/ios/35/ffffff/hashtag-large.png" />
          {/* <p id="nav-text">Explore</p> */}
        </Link>
      </nav>
    </div>
  );
};
