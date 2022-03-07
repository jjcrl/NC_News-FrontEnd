import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashborad";
import { Articles } from "./components/Articles";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/topic/:topic" element={<Articles />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
