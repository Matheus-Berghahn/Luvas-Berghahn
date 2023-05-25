import './Produtos.scss';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Section1 from './Section1';
import ProdutosLuvas from './ProdutosLuvas';
import ProdutosAventais from './ProdutosAventais';
import ProdutosOutros from './ProdutosOutros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen} from '@fortawesome/free-solid-svg-icons'

function Produtos (){

  const [activeTab, setActiveTab] = useState('');
  const { pathname } = window.location;
  let Component;

  if (pathname.includes('/produtos/aventais')) {
    Component = ProdutosAventais;
  } else if (pathname.includes('/produtos/outros')) {
    Component = ProdutosOutros;
  } else {
    Component = ProdutosLuvas;
  }

  useEffect(() => {
    const pathname = window.location.pathname;
  
    if (pathname === '/produtos/outros') {
      setActiveTab('outros');
    } else if (pathname === '/produtos/aventais') {
        setActiveTab('aventais');
    }else{
        setActiveTab('luvas');
    }
   
  },[]);

  
  const scrollToClasseDeDestino = () => {
    const classeDeDestino = document.getElementById(Component);
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }
  return (
    <>
      <Section1 />
      <div className="produtos max-width">
        <div className='header_produto'>
          <i><FontAwesomeIcon icon={faBoxOpen} /></i>
            <h2>Produtos</h2>
        </div>
        <div className='flex_prod'>
        <li className='color_li'><a onClick={scrollToClasseDeDestino} href="/produtos/luvas" className={activeTab === 'luvas' ? 'active' : ''}>Luvas</a></li>
        <li className='color_li'><a onClick={scrollToClasseDeDestino} href="/produtos/aventais" className={activeTab === 'aventais' ? 'active' : ''}>Aventais</a></li>
        <li className='color_li'><a onClick={scrollToClasseDeDestino} href="/produtos/outros" className={activeTab === 'outros' ? 'active' : ''}>Outros</a></li>
        </div>
      </div>
      <Component />
      <Footer />
    </>
  );
};

export default Produtos;
