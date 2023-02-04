import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import MainNav from "./layout/MainNav";

function App() {
  const location = useLocation();
  console.log("location", location.pathname);

  const transitions = useTransition(location, {
    from: { opacity: 0, position: "absolute", width: "100%" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <React.Fragment>
      <MainNav />
      {transitions((styles, item) => (
        <animated.div style={styles}>
          <Routes location={item}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </animated.div>
      ))}
    </React.Fragment>
  );
}

export default App;
