
import Section1 from '../Section1';
import Footer from '../Footer';
import img_luva1 from "../assets/images/luvas1.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './SectionProduto.scss';


// import required modules
import { Pagination } from "swiper";

const Produto1 = () => {
    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return(
        <>
        <Section1 />
        <div className='section_produto'>
            <div className='center'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={img_luva1}></img></SwiperSlide>
                <SwiperSlide> <img src={img_luva1}></img></SwiperSlide>
                <SwiperSlide> <img src={img_luva1}></img></SwiperSlide>
            </Swiper>
                <div className='flex_collum'>
                    <h2>Luvas de raspa</h2>
                    <h3>As luvas de couro são um acessório clássico e elegante que trazem consigo uma série de benefícios. Além de conferirem um toque sofisticado a qualquer traje, essas luvas oferecem proteção e conforto às mãos. Seu material resistente garante durabilidade, enquanto o forro interno proporciona uma sensação suave e agradável ao toque. Com um bom par de luvas de couro, é possível manter as mãos aquecidas nos dias frios, sem comprometer a destreza dos dedos. Seja para um passeio casual ou um evento formal, as luvas de couro são um complemento versátil e atemporal que nunca perde seu charme.</h3>
                    <div className='ref_btn'>
                        <p>Referência: 01</p>
                        <a href='/produtos/luvas'>
                            <button className='btn'>VOLTAR</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )   
}
        
export default Produto1;



