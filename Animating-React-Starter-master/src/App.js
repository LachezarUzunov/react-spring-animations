import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./Toggle";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Checkout from "./Checkout";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`,
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
      </header>
      {/* <Nav style={navAnimation} /> */}
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;
