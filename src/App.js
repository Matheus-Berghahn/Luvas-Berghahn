import './App.scss';
import Home from './Home';
import Produtos from './Produtos';
import Sobre from './Sobre';
import Produto1 from './todos_produtos/Produto1';

const { pathname } = window.location;
  let Component;

  if (pathname === '/sobre') {
    Component = Sobre;
  } else if (pathname === '/produtos') {
    Component = Produtos;
  } else if (pathname === '/produtos/luvas') {
    Component = Produtos;
  } else if (pathname === '/produtos/luvas/produto1') {
    Component = Produto1;
  } else if (pathname === '/produtos/aventais') {
    Component = Produtos;
  } else if (pathname === '/produtos/outros') {
    Component = Produtos;
  }else {
    Component = Home;
  }
  


function App() {

  return (
    <>
    <div className='content'>
 
          <Component/>
     
    </div>
    </>
  );
}

export default App;