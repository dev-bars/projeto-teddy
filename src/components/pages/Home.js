import styles from './Home.module.css'

function Home() {
    return (
      <div className={styles.home_container}>
        <div>
          <h1>Olá, seja bem vindo!</h1>
        </div>
        <div className={styles.home_button}>
          <input type="text" placeholder="Digite seu nome"></input>
        </div>
        <div className={styles.home_button_color}>
          <input type="submit" value="Entrar"></input>
        </div>
      </div>
    );
}

export default Home