import React from "react";
import './Section4Parallax.scss';
import {Parallax} from "react-parallax"
import shape2 from "./assets/images/bg_parallax.jpg"



function Section4Parallax() {

  const scrollToClasseDeDestino = () => {
    const classeDeDestino = document.getElementById("ancor_faq");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="Section4Parallax">
      <Parallax  className="bg_parallax" bgImage={ shape2 } strength={800}>
      <div className="txt_parallax">
          <h2>Como desempenhamos nossas funções:</h2>
      </div>
      </Parallax>
    </div>
  );
}

export default Section4Parallax ;



