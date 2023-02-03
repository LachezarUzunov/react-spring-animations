import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
//import AnimatedTitle from "./AnimatedTitle";

const Toggle = () => {
  const [toggled, setIsToggled] = useState(false);
  //   const fade = useSpring({
  //     opacity: toggled ? 1 : 0.5,
  //     fontSize: toggled ? "2rem" : "4rem",
  //     y: toggled ? 0 : -50,
  //   });

  const { opacity, fontSize, y } = useSpring({
    opacity: toggled ? 1 : 0.5,
    fontSize: toggled ? "2rem" : "4rem",
    y: toggled ? 0 : -50,
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
          opacity,
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setIsToggled(!toggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
