
import img_distribuição from "./assets/images/distribuição.jpg";
import img_clientes from "./assets/images/clientes.jpg";
import img_material from "./assets/images/material.jpg";
import "./Section3.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'


function Section3() {

  return (
    <div className="section3 max-width">
      <div className="all_box">
            <div className="card">
              <div className="hidden_img">
                <img src={img_distribuição}></img>
              </div>
              <div className="flex_row">
              <i><FontAwesomeIcon icon={faTruckFast} /></i>
                <div className="flex_collum">
                  <h2> Distribuição</h2>
                  <p>O transporte adequado pode trazer redução de custos e melhorar o atendimento ao cliente.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="hidden_img">
                <img src={img_clientes}></img>
              </div>
              <div className="flex_row">
              <i><FontAwesomeIcon icon={faHandshake} /></i>
                <div className="flex_collum">
                  <h2> Clientes</h2>
                  <p>Clientes satisfeitos são essenciais para o sucesso de qualquer empresa.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="hidden_img">
                <img src={img_material}></img>
              </div>
              <div className="flex_row">
              <i><FontAwesomeIcon icon={faBox} /></i>
              <div className="flex_collum">
                <h2> Material</h2>
                <p>A gestão adequada dos materiais é fundamental para garantir a eficiência e a lucratividade de uma empresa.</p>
                </div>
              </div>
            </div>

         
      </div>

    </div>
  );
}

export default Section3;
