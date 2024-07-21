import { useState } from 'react';
import Iniciar from './components/Iniciar';
import Registrarse from './components/Registrarse';
import { Home } from './components/Home';

function App() {
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <Home setPage={setPage}/>
      case 'iniciar':
        return <Iniciar setPage={setPage} />;
      case 'registrarse':
        return <Registrarse setPage={setPage} />;
      default:
        return <Iniciar setPage={setPage} />;
    }
  };


  return (
    <>

      <div>
          {renderPage()}
        
      </div>

    </>
  )
}

export default App
