import './ProdutosGeral.scss';
import img_aventais1 from "./assets/images/aventais1.png";
import img_aventais2 from "./assets/images/aventais2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ProdutosAventais (){


    return(
        <>
        <div className="produtos_geral max-width">
        <div className="all_box">
            <div className="card">
              <div>
                <img src={img_aventais1}></img>
              </div>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 01</p>
                  <a href='/'>
                    <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                  </a>
                </div>
            </div>

            <div className="card">
              <img src={img_aventais2}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 02</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_aventais1}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 03</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
              
            </div>
            <div className="card">
              <img src={img_aventais2}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 04</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_aventais1}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 05</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_aventais2}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 06</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_aventais1}></img>
                <div className="flex_collum">
                  <h2>Luvas de raspa</h2>
                  <p>Referência: 07</p>
                  <button className='btn'>Ver mais fotos <i className="chevron"><FontAwesomeIcon icon={faChevronRight} /></i></button>
                </div>
            </div>

            <div className="card">
              <img src={img_aventais2}></img>
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
        
export default ProdutosAventais ;
    