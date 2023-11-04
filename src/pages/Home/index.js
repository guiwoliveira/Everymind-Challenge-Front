import React from 'react'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar />
      <Link to="/cadastro-vagas">Empresa</Link>
      <Link to="/vagas">Candidato</Link>
    </div>
  )
}

export default Home