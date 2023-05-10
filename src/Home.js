
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section4Parallax from './Section4Parallax';
import Section5 from './Section5';
import Footer from './Footer';


function Home() {

  return (
    <>
    <div className='Home'> 
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4Parallax />
      <Section4 />
      <Section5 />
      <Footer />
    
    </div>
    </>
  );
}

export default Home;


