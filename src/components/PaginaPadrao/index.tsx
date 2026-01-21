import styles from './PaginaPadrao.module.scss';
//Childen do react-router-dom
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div>
        {/* O <Outlet /> é onde o conteúdo variável aparece. */}
        <Outlet></Outlet>
      </div>
      
    </>
  );
}