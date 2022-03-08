import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="main">
      <div className="nav-container">
        <nav className="nav">
          <Link className="nav-item" to="dashboard">
            <img src="https://img.icons8.com/ios/50/ffffff/home--v1.png" />
            <p id="nav-text">Dashboard</p>
          </Link>
          <Link className="nav-item" to="articles">
            <img src="https://img.icons8.com/ios/50/ffffff/a.png" />
            <p id="nav-text">Articles</p>
          </Link>
          <Link className="nav-item" to="/article_editor">
            <img src="https://img.icons8.com/ios/50/ffffff/edit--v1.png" />
            <p id="nav-text">Editor</p>
          </Link>
          <Link className="nav-item" to="/welcome">
            <img src="https://img.icons8.com/ios/50/ffffff/groups.png" />
            <p id="nav-text">Groups</p>
          </Link>
          <Link className="nav-item" to="/">
            <img src="https://img.icons8.com/ios/50/ffffff/search--v1.png" />
            <p id="nav-text">Search</p>
          </Link>
          <Link className="nav-item" to="/">
            <img src="https://img.icons8.com/ios/50/ffffff/hashtag-large.png" />
            <p id="nav-text">Explore</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};
