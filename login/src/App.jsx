import { useState } from 'react';
import Iniciar from './components/Iniciar';
import Registrarse from './components/Registrarse';
function App() {
  const [page, setPage] = useState('iniciar');

  const renderPage = () => {
    switch (page) {
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
