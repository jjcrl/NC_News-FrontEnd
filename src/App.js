import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashborad";
import { Articles } from "./components/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>ncnews</p>
        <Navigation />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="articles" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
