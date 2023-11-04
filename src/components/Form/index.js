import styles from '../Formulario.module.css'

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <section className={styles.cadastro_container}>
            <h1>Cadastre uma vaga</h1>
            <p>Todos os campos devem ser preenchidos para cadastrar a vaga!</p>
            <form className={styles.form}>
                <div>
                    <label>Nome da empresa</label>
                    <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome da empresa" />
                </div>
                <div>
                    <label>Tipo de vaga</label>
                    <input type="text" value={obj.tipo} onChange={eventoTeclado} name="tipo" placeholder="Tipo de vaga" />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea type="text" value={obj.descricao} onChange={eventoTeclado} name="descricao" placeholder="Descrição" rows="5" maxlength="150"/>
                </div>
                <div>
                    <label>Cargo</label>
                    <input type="text" value={obj.cargo} onChange={eventoTeclado} name="cargo" placeholder="Cargo" />
                </div>
                <div>
                    <label>Local</label>
                    <input type="text" value={obj.local} onChange={eventoTeclado} name="local" placeholder="Local" />
                </div>
                <div>
                    <label>Turno</label>
                    <input type="text" value={obj.turno} onChange={eventoTeclado} name="turno" placeholder="Turno" />
                </div>
                <div>
                    <label>Salario</label>
                    <input type="text" value={obj.salario} onChange={eventoTeclado} name="salario" placeholder="Salário" />
                </div>
            </form>
            <div className={styles.btn_container}>
                {
                    botao?
                    <button type="button" className={styles.btn_cadastrar} onClick={cadastrar} value="Cadastrar">Cadastrar</button>
                    :
                    <div>
                        <input type="button" className={styles.btn_editar} value="Editar" onClick={alterar} />
                        <input type="button" className={styles.btn_excluir} value="Excluir" onClick={remover}/>
                        <input type="button" className={styles.btn_cancelar} value="Cancelar" onClick={cancelar}/>
                    </div>
                }
            </div>
        </section>
    )
}

export default Formulario;