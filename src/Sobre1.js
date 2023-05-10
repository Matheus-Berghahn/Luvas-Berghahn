
import "./Sobre1.scss";
import img_func from "./assets/images/funcionarios.jpg";
import img_chefe from "./assets/images/chefe.jpg";
import img_empresa from "./assets/images/empresa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
function Sobre1() {
  return (
    <div className='sobre1 max-width'>
      <div className="txt">
        <h2>Conheça a nossa história</h2>
        <p>Na nossa jornada, atravessamos fronteiras, desafiamos limites e buscamos incansavelmente a excelência. Com uma equipe apaixonada e comprometida, unimos nossa expertise à inovação, criando soluções que transformam o cenário atual. </p>
      </div>

      <div className="sobre">
          <div className="sobre_flex">
            <h2><i><FontAwesomeIcon icon={faBook} /></i> Sobre</h2>
            <h3>Há uma década, iniciamos nossa jornada como uma empresa familiar dedicada à proteção de vidas e à segurança no ambiente de trabalho. Desde então, temos trabalhado incansavelmente para oferecer soluções confiáveis de Equipamentos de Proteção Individual (EPI).
                Nosso compromisso com a qualidade e a excelência nos permitiu conquistar a confiança de clientes e parceiros ao longo dos anos. Com uma ampla gama de EPIs, que vão desde capacetes e luvas até máscaras e vestuário especializado, estamos preparados para atender às necessidades de diversos setores e garantir a proteção de colaboradores em diferentes ambientes de trabalho.
            </h3>
          </div>
          <div className="sobre_flex">
            <h2><i><FontAwesomeIcon icon={faLightbulb} /></i> Criação</h2>
            <h3>A criação de uma empresa é um ato de coragem, visão e determinação. É o momento em que um sonho ganha forma e se transforma em uma realidade empreendedora. Iniciar uma empresa envolve planejamento, pesquisa e uma dose de ousadia. Quando decidimos criar uma empresa, abrimos as portas para novas oportunidades e desafios. É a chance de trilhar um caminho próprio, construir um legado e deixar a nossa marca no mundo dos negócios. Cada empresa tem uma história única, um propósito que a impulsiona e valores que guiam suas ações. A jornada empreendedora é repleta de altos e baixos. É preciso enfrentar obstáculos, superar dificuldades e estar disposto a aprender com os erros.
            </h3>
          </div>
      </div>

      <div className="content1 margin_content">
        <img src={img_func} alt="funcionarios" />
          <div  className="center_flex">
            <h2><i><FontAwesomeIcon icon={faPeopleGroup} /></i> Equipe</h2>
            <h3>A equipe de uma empresa é o coração pulsante por trás de seu sucesso. Composta por indivíduos talentosos e comprometidos, cada membro traz consigo uma combinação única de habilidades, experiências e perspectivas. Juntos, eles formam um conjunto diversificado de talentos, trabalhando em harmonia para alcançar metas e objetivos comuns.</h3>
          </div>
          
        </div>
        <div className="content2 margin_content">
          <img src={img_chefe} alt="chefe" />
          <div className="center_flex">
            <h2><i><FontAwesomeIcon icon={faUserTie} /></i> Fundador</h2>
            
            <h3>Como fundador de uma empresa de couro, transformei minha paixão em realidade. Com coragem e determinação, enfrentei desafios e criei um negócio único. Agora, compartilho minha visão e entrego produtos de qualidade. Estou empolgado com o futuro da minha empresa de couro.</h3>
            
          </div>
        </div>
        <div className="content3 margin_content">
        <img src={img_empresa} alt="Empresa" />
          <div  className="center_flex">
            <h2><i><FontAwesomeIcon icon={faLocationDot} /></i> Venha conhecer!</h2>
            <h3>A equipe de uma empresa é o coração pulsante por trás de seu sucesso. Composta por indivíduos talentosos e comprometidos, cada membro traz consigo uma combinação única de habilidades, experiências e perspectivas. Juntos, eles formam um conjunto diversificado de talentos, trabalhando em harmonia para alcançar metas e objetivos comuns.</h3>
            <button className="c3_btn">Como chegar</button>
          </div>
          
        </div>
    </div>
  );
}

export default Sobre1;
