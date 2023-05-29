
import "./Sobre1.scss";
import img_func from "./assets/images/funcionarios.jpg";
import img_chefe from "./assets/images/chefe.jpg";
import img_empresa from "./assets/images/empresa.jpg";
import img_10anos from "./assets/images/10anos.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faPaste} from '@fortawesome/free-solid-svg-icons'
import { Waypoint } from 'react-waypoint';
import React, { useState } from 'react';

function Sobre1() {

  const [isVisible, setIsVisible] = useState(false);
  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  const [isVisible2, setIsVisible2] = useState(false);
  const handleWaypointEnter2 = () => {
    setIsVisible2(true);
  };
  const handleWaypointLeave2 = () => {
    setIsVisible2(false);
  };

  const [isVisible3, setIsVisible3] = useState(false);
  const handleWaypointEnter3 = () => {
    setIsVisible3(true);
  };
  const handleWaypointLeave3 = () => {
    setIsVisible3(false);
  };
  
  const [isVisible4, setIsVisible4] = useState(false);
  const handleWaypointEnter4 = () => {
    setIsVisible4(true);
  };
  const handleWaypointLeave4 = () => {
    setIsVisible4(false);
  };
  return (
    <div className='sobre1 max-width'>
      <div className='header_sobre'>
            <i><FontAwesomeIcon icon={faPaste} /></i>
            <h2>Sobre</h2>
        </div>
      <div className="txt">
        <h2>Conheça a nossa história</h2>
        <p>Na nossa jornada, atravessamos fronteiras, desafiamos limites e buscamos incansavelmente a excelência. Com uma equipe apaixonada e comprometida, unimos nossa expertise à inovação, criando soluções que transformam o cenário atual. </p>
      </div>
      <Waypoint onEnter={handleWaypointEnter}  bottomOffset="30%" />
      <div className="sobre">
          <div className={`sobre_flex ${isVisible ? "anima-sobre_flex" : "not-anima-sobre_flex"}`}>
              <h2><i><FontAwesomeIcon icon={faBook} /></i> Sobre a Luvas Berghahn</h2>
              <div className="sobre_text_anos">
                  <h3 className="text_anos">Há uma década, iniciamos nossa jornada como uma empresa familiar dedicada à proteção de vidas e à segurança no ambiente de trabalho. Desde então, temos trabalhado incansavelmente para oferecer soluções confiáveis de Equipamentos de Proteção Individual (EPI).
                    Nosso compromisso com a qualidade e a excelência nos permitiu conquistar a confiança de clientes e parceiros ao longo dos anos. Com uma ampla gama de EPIs, que vão desde capacetes e luvas até máscaras e vestuário especializado, estamos preparados para atender às necessidades de diversos setores e garantir a proteção de colaboradores em diferentes ambientes de trabalho.</h3>
                    <img src={img_10anos} alt="#" />
              </div>
          </div>
          <div className={`sobre_flex ${isVisible ? "anima-sobre_flex" : "not-anima-sobre_flex"}`}>
            <h2><i><FontAwesomeIcon icon={faLightbulb} /></i> Criação da empresa</h2>
              <h3>A criação de uma empresa é um ato de coragem, visão e determinação. É o momento em que um sonho ganha forma e se transforma em uma realidade empreendedora. Iniciar uma empresa envolve planejamento, pesquisa e uma dose de ousadia. Quando decidimos criar uma empresa, abrimos as portas para novas oportunidades e desafios. É a chance de trilhar um caminho próprio, construir um legado e deixar a nossa marca no mundo dos negócios. Cada empresa tem uma história única, um propósito que a impulsiona e valores que guiam suas ações. A jornada empreendedora é repleta de altos e baixos. É preciso enfrentar obstáculos, superar dificuldades e estar disposto a aprender com os erros.</h3>
          </div>
      </div>
      <Waypoint onEnter={handleWaypointEnter2} onLeave={handleWaypointLeave2}  bottomOffset="50%" />
      <div  className={`content1 margin_content ${isVisible2 ? "anima-margin_content" : "not-anima-margin_content"}`}>
        <img src={img_func} alt="funcionarios" />
          <div  className="center_flex">
            <h2><i><FontAwesomeIcon icon={faPeopleGroup} /></i> Equipe</h2>
            <h3>A equipe de uma empresa é o coração pulsante por trás de seu sucesso. Composta por indivíduos talentosos e comprometidos, cada membro traz consigo uma combinação única de habilidades, experiências e perspectivas. Juntos, eles formam um conjunto diversificado de talentos, trabalhando em harmonia para alcançar metas e objetivos comuns.</h3>
          </div>
          
        </div>
        <Waypoint onEnter={handleWaypointEnter3} onLeave={handleWaypointLeave3} bottomOffset="50%" />
        <div className={`content2 margin_content ${isVisible3 ? "anima-margin_content" : "not-anima-margin_content"}`}>
          <img src={img_chefe} alt="chefe" />
          <div className="center_flex">
            <h2><i><FontAwesomeIcon icon={faUserTie} /></i> Fundador</h2>
            
            <h3>Como fundador de uma empresa de couro, transformei minha paixão em realidade. Com coragem e determinação, enfrentei desafios e criei um negócio único. Agora, compartilho minha visão e entrego produtos de qualidade. Estou empolgado com o futuro da minha empresa de couro.</h3>
            
          </div>
        </div>
        <Waypoint onEnter={handleWaypointEnter4} onLeave={handleWaypointLeave4}  bottomOffset="50%" />
        <div className={`content3 margin_content ${isVisible4 ? "anima-margin_content" : "not-anima-margin_content"}`}>
        <img src={img_empresa} alt="Empresa" />
          <div  className="center_flex">
            <h2><i><FontAwesomeIcon icon={faLocationDot} /></i> Venha conhecer!</h2>
            <h3>A equipe de uma empresa é o coração pulsante por trás de seu sucesso. Composta por indivíduos talentosos e comprometidos, cada membro traz consigo uma combinação única de habilidades, experiências e perspectivas. Juntos, eles formam um conjunto diversificado de talentos, trabalhando em harmonia para alcançar metas e objetivos comuns.</h3>
            <a target="blank" href="https://www.google.com.br/maps/place/R.+das+Saracuras,+221+-+Campo+Grande,+Est%C3%A2ncia+Velha+-+RS,+93600-000/@-29.6581471,-51.2245803,17z/data=!3m1!4b1!4m5!3m4!1s0x95195ba78e52c021:0xa538c290941cb6dd!8m2!3d-29.6581518!4d-51.2220054"><button className="c3_btn">Como chegar</button></a>
          </div>
          
        </div>
    </div>
  );
}

export default Sobre1;
