import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import AnimatedTitle from "./AnimatedTitle";

const Toggle = () => {
  const [toggled, setIsToggled] = useState(false);
  const fade = useSpring({
    opacity: toggled ? 1 : 0.5,
    fontSize: toggled ? "2rem" : "4rem",
  });

  return (
    <div>
      <AnimatedTitle style={fade}>Hello</AnimatedTitle>
      <button onClick={() => setIsToggled(!toggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
