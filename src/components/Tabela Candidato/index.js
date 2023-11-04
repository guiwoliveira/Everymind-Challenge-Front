import React from 'react'
import styles from './TabelaCandidato.module.css'

function TabelaCandidato({vetor}) {
    return (
        <section className={styles.tb_container}>
            <table className={styles.tb}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Empresa</th>
                        <th>Tipo de vaga</th>
                        <th>Descrição</th>
                        <th>Cargo</th>
                        <th>Local</th>
                        <th>Turno</th>
                        <th>Salario</th>
                    </tr>
                </thead>

                <tbody className={styles.tb_body}>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice} value="linhas">
                                <td>{indice+1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.tipo}</td>
                                <td className={styles.descricao}>{obj.descricao}</td>
                                <td>{obj.cargo}</td>
                                <td>{obj.local}</td>
                                <td>{obj.turno}</td>
                                <td>R$ {obj.salario}</td>
                                <td><button className={styles.btn} value="Candidatar">Candidatar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default TabelaCandidato