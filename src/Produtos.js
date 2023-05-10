import './Produtos.scss';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Section1 from './Section1';
import ProdutosLuvas from './ProdutosLuvas';
import ProdutosAventais from './ProdutosAventais';
import ProdutosOutros from './ProdutosOutros';

function Produtos (){
  const { pathname } = window.location;
  let Component;

  if (pathname.includes('/produtos/aventais')) {
    Component = ProdutosAventais;
  } else if (pathname.includes('/produtos/outros')) {
    Component = ProdutosOutros;
  } else {
    Component = ProdutosLuvas;
  }

  return (
    <>
      <Section1 />
      <div className="produtos max-width">
        <div className='flex_prod'>
        <li><a href="/produtos/luvas">Luvas</a></li>
        <li><a href="/produtos/aventais">Aventais</a></li>
        <li><a href="/produtos/outros">Outros</a></li>
        </div>
      </div>
      <Component />
      <Footer />
    </>
  );
};

export default Produtos;
