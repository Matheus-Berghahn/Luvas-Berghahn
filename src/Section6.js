
import './Section6.scss';
import {Parallax} from "react-parallax"
import bgImage from "./assets/images/img_criacao.jpg"
import { Waypoint } from 'react-waypoint';
import React, { useState } from 'react';


function Section6() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };
  return (
    <div className="Section6">
      <Waypoint onEnter={handleWaypointEnter}  bottomOffset="0%" />
      <div className={`s6_left ${isVisible ? "anima-s6_left" : "not-anima-s6_left"}`}>
        <h2>Lorem Ipsum</h2>
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
        <button className='btn fourth'>Conheça</button>
      </div>
      <Parallax  className="bg_parallax" bgImage={ bgImage } strength={1000}>.</Parallax>
    </div>
  );
}

export default Section6 ;



