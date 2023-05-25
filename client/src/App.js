import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
   
      </Routes>
    </>
  );
}

export default App;
