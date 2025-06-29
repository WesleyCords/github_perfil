import { useState } from 'react'

import ReposList from './components/ReposList'
import Perfil from "./components/Perfil";

import styles from './App.module.css'

import logoImg from  './assets/logoSearch.png'

function App() {
  const [nomeUser, setNomeUser] = useState('');
  const [inputValue, setInputValue] = useState('')
  const buttonSearch = () => {setNomeUser(inputValue)}
  return (
    <>
      <div className='container'>
        <div className={styles.searchMenu}>
          <img className={styles.logo} src={logoImg} alt="" />
          <div className={styles.navBar}>
            <input className={styles.barInput} type="text" value={inputValue} onChange={e => setInputValue(e.target.value.replace(/\s+/g, ''))}/>
            <button className={styles.barButton} type='button' onClick={buttonSearch}>
              Search
            </button>
          </div>
        </div>
        {nomeUser.length > 4 && (
          <>
            <Perfil userName={nomeUser}/>
            <ReposList userName={nomeUser} />
          </>
        )}
      </div>


    </>
  )
}

export default App
