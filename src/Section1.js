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
    } else if (pathname.startsWith('/produtos/')) {
      setActiveTab('produto');
      const parts = pathname.split('/');
      const productId = parts[3]; 
      
   

      if (productId === 'luvas') {
   
      } else if (productId === 'aventais') {
        
      } else if (productId === 'outros') {
        
      } else {
      }
    } else {
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
          <a  href="/produtos/luvas" className={activeTab === 'produto' ? 'active' : ''}>
            PRODUTOS
          </a>
        </li>
      </div>
      <div className="s1_flex_btn">
        <a  className="popover" title='55999999999' href='tel:+55999999999'>
        <button>
          <i className="fone"><FontAwesomeIcon icon={faPhone} /></i> Telefone
        </button>
        </a>
        <a  className="popover" title='rafael.berghahn@bol.com.br' href='mailto:rafael.berghahn@bol.com.br'>
        <button>
          <i className="email"><FontAwesomeIcon icon={faEnvelope} /></i> Email
        </button>
        </a>
      </div>
    </div>
  );
}

export default Section1;
