import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu/>


        <Routes>
          {/* Representa a rota pai */}
          <Route path='/' element={<PaginaPadrao/>}>
            {/* Quando a rota for exatamente / ... Renderize o componente Inicio */}
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio/>} /> 
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
