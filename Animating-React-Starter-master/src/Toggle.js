import React, { useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
//import AnimatedTitle from "./AnimatedTitle";

const Toggle = () => {
  const [toggled, setIsToggled] = useState(false);
  //   const fade = useSpring({
  //     opacity: toggled ? 1 : 0.5,
  //     fontSize: toggled ? "2rem" : "4rem",
  //     y: toggled ? 0 : -50,
  //   });

  // const { opacity, fontSize, y } = useSpring({
  //   opacity: toggled ? 1 : 0.5,
  //   fontSize: toggled ? "2rem" : "4rem",
  //   y: toggled ? 0 : 1,
  // });

  // TODO - with transition you are mounting and unmounting a component
  const transition = useTransition(toggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.h1 key={key} style={props}>
              Hello
            </animated.h1>
          )
      )}

      <button onClick={() => setIsToggled(!toggled)}>Toggle</button>
    </div>
  );

  // TODO - DEEPER INTO INTERPOLATION
  // return (
  //   <div>
  //     <animated.h1
  //       style={{
  //         transform: y
  //           .interpolate({
  //             range: [0, 0.25, 0.5, 0.75, 1],
  //             output: [0, -25, -50, -100, -50],
  //           })
  //           .interpolate((y) => `translate3d(0, ${y}px, 0)`),
  //         opacity,
  //       }}
  //     >
  //       Hello
  //     </animated.h1>
  //     <button onClick={() => setIsToggled(!toggled)}>Toggle</button>
  //   </div>
  // );
};

export default Toggle;
