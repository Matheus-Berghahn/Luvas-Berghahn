import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Section5.scss";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Distribuição
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Nosso parceiro no transporte!
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            A Expresso São Miguel, com sua ampla experiência e excelência no setor de transporte, demonstrou ser o parceiro ideal para atender às necessidades crescentes da nossa base de clientes. Sua frota moderna e bem-mantida, juntamente com seus motoristas altamente treinados, garantem a segurança e a eficiência em todas as nossas operações.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Clientes
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Nossos clientes, nossa prioridade!
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Sabemos que a confiança é a base de qualquer relacionamento duradouro, e é por isso que nos esforçamos para estabelecer uma parceria sólida com cada um dos nossos clientes. Nossa equipe dedicada e experiente trabalha incansavelmente para garantir que sua experiência de viagem seja segura, confortável e eficiente.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Material
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
           Qualidade que você pode confiar!
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Utilizamos apenas couro genuíno de primeira qualidade em nossas luvas, cuidadosamente selecionado para garantir a durabilidade e a resistência necessárias para enfrentar condições de trabalho exigentes. O couro é escolhido com atenção aos detalhes, garantindo um acabamento impecável e uma sensação de conforto ao ser utilizado. Nossas luvas de couro oferecem uma combinação perfeita de proteção, destreza e estilo, proporcionando a confiança necessária para realizar as tarefas com segurança.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
