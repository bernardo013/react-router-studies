import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';

//qualquer coisa que for passada depois de localhost:3000/ .... 
// nos rediciriona para o cardapio 
//se não mantém 
const componenteAtual = window.location.pathname === '/' ? <Inicio></Inicio> : <Cardapio></Cardapio>;

ReactDOM.render(
  <React.StrictMode>
    {componenteAtual}
  </React.StrictMode>,
  document.getElementById('root')
);
