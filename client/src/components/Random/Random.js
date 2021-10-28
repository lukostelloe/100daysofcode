import { React, useState } from "react";
import "./Random.css";
// import SmoothImage from "react-smooth-image";

// import thelads from "../images/thelads.jpg";
// import aristotleimg from "../images/aristotle.jpg";
// import bertrandimg from "../images/bertrand.jpg";
// import humeimg from "../images/hume.jpg";
// import platoimg from "../images/plato.jpg";
// import socratesimg from "../images/socrates.jpg";

// const imageArray = [aristotleimg, bertrandimg, humeimg, platoimg, socratesimg];

// // var randomimage = imageArray[Math.floor(Math.random() * imageArray.length)];

// function Random() {
//   const [imageused, setimageused] = useState(thelads);

//   const changeTick = () => {
//     setimageused(imageArray[Math.floor(Math.random() * imageArray.length)]);
//   };

//   return (
//     <div className="container_random">
//       <h1>Random Image Page</h1>
//       <div className="random_image">
//         <img src={imageused} alt="hello" className="random_image" />
//       </div>
//       <button onClick={changeTick}>Hit me with some philosophy</button>
//     </div>
//   );
// }

// export default Random;

import { useTransition, animated } from "react-spring";
function Random() {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!toggle),
  });
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        😄
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        🤪
      </animated.div>
    )
  );
}

export default Random;
