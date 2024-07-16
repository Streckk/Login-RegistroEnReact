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

      <div className="flex items-center justify-center h-screen bg-[url('https://1.bp.blogspot.com/-m-VEdwkykS0/X2jHP6xwqMI/AAAAAAAAbLE/azc4CVreqNQPMs4nend97i6fo0_oPTgnQCLcBGAsYHQ/w1600/at-at-minimalist-pc-wallpaper-hd.png')] bg-cover bg-center">
        <div className="w-3/4 p-4 text-white bg-black border-2 border-white border-solid bg-opacity-30 rounded-xl h-3/6 md:w-1/2 md:h-3/5 lg:w-2/5 lg:h-3/4">
          <h1 className="m-2 text-3xl text-center">Iniciar Sesión</h1>
          {renderPage()}
        </div>
      </div>

    </>
  )
}

export default App
