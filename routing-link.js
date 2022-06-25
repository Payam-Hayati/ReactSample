import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/"}>Home</Link> |
        <Link to={"/About"}>About</Link> |
        <Link to={"/Contact"}>Contact</Link>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;