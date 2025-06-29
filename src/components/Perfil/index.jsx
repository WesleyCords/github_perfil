import styles from './Perfil.module.css'

const Perfil = ({ userName }) => {
    return (
        <header className={styles.header}>
            <div className={styles.profile}>
                <img className={styles.avatar} src={`https://github.com/${userName}.png`} />
                <h1 className={styles.name}>
                    {userName}
                </h1>
            </div>
            <img className={styles.stats} height='100%' loading='lazy' src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=compact&theme=radical&locale=pt-br`} alt="" />
        </header>
    )
}

export default Perfil;