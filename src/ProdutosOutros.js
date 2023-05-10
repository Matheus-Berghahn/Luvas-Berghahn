import './ProdutosGeral.scss';
import img_distribuição from "./assets/images/distribuição.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ProdutosOutros (){

    return(
        <>
        <div className="produtos_geral max-width">
        <div className="all_box">
            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 01</p>
                  <a href='/'>
                    <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                  </a>
                </div>
            </div>

            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 02</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 03</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
              
            </div>
            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 04</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 05</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 06</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 07</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_distribuição}></img>
                <div className="flex_collum">
                  <h2> Distribuição</h2>
                  <p>Referência: 08</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            
      </div>
    </div>
    </>
    )   
}
        
export default ProdutosOutros;
    