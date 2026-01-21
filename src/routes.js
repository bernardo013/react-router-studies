import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    //reaproveitando o componente Menu com o router-dom 
    // dessa forma não precisamos implemenetar no Cardpadio e no index no Inicio. 
    //Pois o componente é renderizado junto com as rotas.
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
