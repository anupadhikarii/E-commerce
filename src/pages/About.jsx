import React from "react";
import AboutBoard from "../component/aboutBoard/AboutBoard";
function About() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <AboutBoard />
    </>
  );
}

export default About;
