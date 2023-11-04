import React from 'react'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

function Home() {
  return (
    <section>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <h1>Escolha o tipo de conta</h1>
          <p>Cada conta tem uma visualização e funções diferentes dentro do site. 
            Você pode voltar e mudar o tipo de conta sempre que quiser</p>
        </div>
        <Link className={styles.btn} to="/cadastro-vagas">Empresa</Link>
        <Link className={styles.btn} to="/vagas">Candidato</Link>
      </div>
    </section>
    
  )
}

export default Home