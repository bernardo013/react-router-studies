import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const params = useParams();

  if(params.user !== 'banana') {
    return <Navigate to={'/'} />;
  }


  return (
    <h1>Bem-vindo a página de admin</h1>
  );
}