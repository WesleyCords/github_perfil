import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            });
    }, [userName])

    return (
        <div className="repos-content">
            {estaCarregando ? (
                <div className="spinner"></div>
            ) : (
                <ul className={styles.list}>
                    {repos.map( repositorio => (
                        <li className={styles.listItem} key={repositorio.id}> 
                            <div className={styles.itemName}>
                                <b>Nome:  </b> {repositorio.name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:  </b> {repositorio.language}
                            </div>
                            <div >
                                <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a> 
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
        )
}

export default ReposList