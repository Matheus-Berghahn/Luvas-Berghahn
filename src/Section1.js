import React, { useState, useEffect } from 'react';
import "./Section1.scss";
import img_logo from "./assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Section1() {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/sobre') {
      setActiveTab('sobre');
    } else if (pathname === '/produtos') {
      setActiveTab('produto');
    } 
    else if (pathname === '/produtos/luvas') {
      setActiveTab('produto');
    }
    else if (pathname === '/produtos/luvas/produto1') {
      setActiveTab('produto');
    }
    else if (pathname === '/produtos/aventais') {
      setActiveTab('produto');
    }
    else if (pathname === '/produtos/outros') {
      setActiveTab('produto');
    }else {
      setActiveTab('home');
    }
  }, []);

  return (
    <div className="section1 max-width">
      <img src={img_logo} alt="imagem_logo"></img>
      <div className="s1_txt">
        <li className="home">
          <a href="/" className={activeTab === 'home' ? 'active' : ''}>
            HOME
          </a>
        </li>
        <li className="sobre">
          <a href="/sobre" className={activeTab === 'sobre' ? 'active' : ''}>
            SOBRE
          </a>
        </li>
        <li className="produto">
          <a href="/produtos" className={activeTab === 'produto' ? 'active' : ''}>
            PRODUTOS
          </a>
        </li>
      </div>
      <div className="s1_flex_btn">
        <button>
          <i className="fone"><FontAwesomeIcon icon={faPhone} /></i> Telefone
        </button>
        <button>
          <i className="email"><FontAwesomeIcon icon={faEnvelope} /></i> Email
        </button>
      </div>
    </div>
  );
}

export default Section1;
