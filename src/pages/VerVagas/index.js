import React from 'react'
import { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar'
import TabelaCandidato from '../../components/Tabela Candidato';
import Footer from '../../components/Footer';

function VerVagas() {
    
    const [vagas, setVagas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setVagas(retorno_convertido));
    }, []);

    return (
        <div>
            <NavBar />
            <TabelaCandidato vetor={vagas} />
        </div>
    )
}

export default VerVagas