import { useState } from 'react'
import ReposList from './components/ReposList'
import Perfil from "./components/Perfil";

function App() {
  const [nomeUser, setNomeUser] = useState('');
  return (
    <>
      <input type="text" onBlur={e => setNomeUser(e.target.value)}/>

      {nomeUser.length > 4 && (
        <>
          <Perfil nomeDoUsuario={nomeUser}/>
          <ReposList nomeUsuario={nomeUser} />
        </>
      )}

    </>
  )
}

export default App
