import styles from './PaginaPadrao.module.scss';
//Childen do react-router-dom
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        {/* O <Outlet /> é onde o conteúdo variável aparece. */}
        <Outlet></Outlet>
      </div>
      
    </>
  );
}