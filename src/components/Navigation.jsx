import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Link to="dashboard">Dashboard</Link> <Link to="articles">Articles</Link>{" "}
      <Link to="/article_editor">New Post</Link>{" "}
      <Link to="/welcome">Log Out</Link>{" "}
    </nav>
  );
};
