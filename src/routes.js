import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Cardapio/Sobre';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu/>

        {/* nested routes */}
        <Routes>
          {/* Representa a rota pai */}
          <Route path='/' element={<PaginaPadrao/>}>
            {/* Quando a rota for exatamente / ... Renderize o componente Inicio */}
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio/>} /> 
            <Route path='sobre' element={<Sobre />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
