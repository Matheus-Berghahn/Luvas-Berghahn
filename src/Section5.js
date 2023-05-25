
import "./Section5.scss";
import img_logo1 from "./assets/images/logo_zapa.png"
import img_logo2 from "./assets/images/logo_epi.png"
import img_logo3 from "./assets/images/logo_casa.png"

function Section5() {
  return (
    <>
    <div  className="section5">
      <h2>Clientes e parceiros</h2>
      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
      <div className="s5_flex">
        <img src={img_logo1}></img>
        <img src={img_logo2}></img>
        <img src={img_logo3}></img>
        <img src={img_logo1}></img>
        <img src={img_logo2}></img>
        <img src={img_logo3}></img>
        
      </div>
    </div>
    </>
  );
}
export default Section5;