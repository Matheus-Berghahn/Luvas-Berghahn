
import "./Section3.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';
import { Waypoint } from 'react-waypoint';
import React, { useState } from 'react';


function Section3() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };
  return (
    <div className="section3 max-width">
      <Waypoint onEnter={handleWaypointEnter}  bottomOffset="0%" />
      <div className="all_box">
            <div className={`card ${isVisible ? "anima-card1" : "not-anima-card"}`}>
                <div className="flex_collum">
                <h2> Confiança</h2>
                <i><FontAwesomeIcon icon={faHandshake} /></i>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>

            <div  className={`card ${isVisible ? "anima-card2" : "not-anima-card"}`}>
                <div className="flex_collum">
                <h2>Valores corporativos</h2>
                <i><FontAwesomeIcon icon={faPeopleGroup} /></i>   
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>                </div>
            </div>

            <div  className={`card ${isVisible ? "anima-card3" : "not-anima-card"}`}>
              <div className="flex_collum">
              <h2> Responsabilidade</h2>
              <i><FontAwesomeIcon icon={faHandsHoldingChild} /></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>              </div>
            </div>
      </div>

    </div>
  );
}

export default Section3;
