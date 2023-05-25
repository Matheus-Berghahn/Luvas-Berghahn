
import "./Section4.scss";
import img_qualidade from "./assets/images/qualidade.png";

// import required modules

function Section4() {
  return (
    <>
    <div  className="section4">
      <div className="s4_flex">
        <div className="s4_left">
          <h2>Qualidade</h2>
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
        </div>
        <div className="s4_right">
        <img src={img_qualidade}></img>
        </div>
      </div>
          
    </div>
    </>
  );
}
export default Section4;