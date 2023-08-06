// import React, { useEffect } from "react";

// const FallingTextComponent = ({ text }) => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll(".word");

//       elements.forEach((element) => {
//         const elementRect = element.getBoundingClientRect();
//         const elementCenterX = elementRect.left + elementRect.width / 2;
//         const windowCenterX = window.innerWidth / 2;

//         if (window.pageYOffset === 0) {
//           element.style.transform = "translateX(0px)";
//         } else if (elementCenterX < windowCenterX) {
//           element.style.transform = "translateX(-1000px)";
//         } else {
//           element.style.transform = "translateX(1000px)";
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const words = text.split(" ");

//   return (
//     <div>
//       {words.map((word, index) => (
//         <React.Fragment key={index}>
//           <span
//             className="word"
//             style={{
//               color: "white",
//               display: "inline-block",
//               opacity: 1,
//               transition: "transform 0.5s",
//             }}
//           >
//             {word}
//           </span>{" "}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

import React, { useEffect } from "react";

const FallingTextComponent = ({ text }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".word");
      // const elements = document.querySelectorAll(".word_STOP"); // I've turned this off!

      elements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementCenterX = elementRect.left + elementRect.width / 2;
        const windowCenterX = window.innerWidth / 4;

        // if (window.pageYOffset <= 50) {
        //   element.style.transform = "translateX(0px)";
        // }
        // else
        // if (elementRect.top < -10 || elementRect.bottom > window.innerHeight) {
        if (elementRect.bottom + 100 > window.innerHeight) {
          if (elementCenterX < windowCenterX) {
            element.style.transform = "translateX(-1000px)";
          } else {
            element.style.transform = "translateX(1000px)";
          }
        } else {
          element.style.transform = "translateX(0px)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const words = text.split(" ");

  return (
    <div>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className="word"
            style={{
              color: "white",
              display: "inline-block",
              opacity: 1,
              transition: "transform 0.5s",
            }}
          >
            {word}
          </span>{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FallingTextComponent;
