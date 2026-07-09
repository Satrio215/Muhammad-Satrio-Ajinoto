import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Lanyard from "./Components/Lanyard.jsx";
import About from "./Components/About.jsx";
import Projek from "./Components/Projek.jsx";
import Skill from "./Components/Skill.jsx";
import Navbar from "./Components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Lanyard />
    <About />
    <Projek />
    <Navbar />
  </StrictMode>,
);
