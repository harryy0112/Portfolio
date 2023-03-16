import React from "react";
import HardikResume from "../../assets/HardikResume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={HardikResume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
