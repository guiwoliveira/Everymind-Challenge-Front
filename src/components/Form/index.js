import styles from '../Formulario.module.css'

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <section className={styles.cadastro_container}>
            <h1>Cadastre uma vaga</h1>

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
                    <textarea type="text" value={obj.descricao} onChange={eventoTeclado} name="descricao" placeholder="Descrição" rows="5"/>
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
            
                {
                    botao?
                    <input type="button" className={styles.btn_cadastrar} onClick={cadastrar} value="Cadastrar" />
                    :
                    <div>
                        <input type="button" className="btn btn-warning" value="Editar" onClick={alterar} />
                        <input type="button" className="btn btn-danger" value="Excluir" onClick={remover}/>
                        <input type="button" className="btn btn-secondary" value="Cancelar" onClick={cancelar}/>
                    </div>
                }
  
            </form>
        </section>
    )
}

export default Formulario;