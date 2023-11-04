import styles from './Tabela.module.css'

function Tabela ({vetor, selecionar}){
    return(
        <section className={styles.tb_container}>
            <table className={styles.tb}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo de vaga</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                    </tr>
                </thead>

                <tbody className={styles.tb_body}>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice} value="linhas">
                                <td>{indice+1}</td>
                                <td>{obj.tipo}</td>
                                <td>{obj.cargo}</td>
                                <td>R$ {obj.salario}</td>
                                <td><button onClick={() => {selecionar(indice)}} value="Selecionar" className={styles.btn}>Selecionar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>     
    )
}

export default Tabela;