import React from "react";
import { useEffect, useState } from 'react';
import * as C from "./styles";
import Navbar from '../../components/Navbar';
import Tabela from '../../components/Table';
import Formulario from '../../components/Form';

const CadastroVagas = () => {

  const vaga = {
    id: 0,
    nome: "",
    tipo: "",
    descricao: "",
    cargo: "",
    local: "",
    turno: "",
    salario: ""
  }

  // * UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [vagas, setVagas] = useState([]);
  const [objCadastrar, setObjCadastrar] = useState(vaga)

  // * UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setVagas(retorno_convertido));
  }, []);


  // * Obter dados de cadastro
  const aoDigitar = (e) => {
    setObjCadastrar({...objCadastrar, [e.target.name]:e.target.value});
  }

  // * Cadastrar vaga
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(objCadastrar),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if (retorno_convertido.mensage !== undefined){
        alert(retorno_convertido.mensage);
      } else {
        setVagas([...vagas, retorno_convertido]);
        alert('Vaga cadastrada com sucesso!');
        limparFormulario();
      }

    })
  }

  // * Alterar vaga
  const alterar = () => {
    fetch('http://localhost:8080/alterar',{
      method:'put',
      body:JSON.stringify(objCadastrar),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if (retorno_convertido.mensage !== undefined){
        alert(retorno_convertido.mensage);
      } else {
        // * Menssagem
        alert('Vaga alterada com sucesso!');

        // * Cópia do vetor de vagas
        let vetorTemp = [...vagas];

        // * Indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objCadastrar.id
        });

        // * Alterar vaga do vetorTemp
        vetorTemp[indice] = objCadastrar;

        // * Atualizar o vetor de vagas
        setVagas(vetorTemp);

        // * Limpar formulario
        limparFormulario();
      }

    })
  }
  
  // * Remover vaga
  const remover = () => {
    fetch('http://localhost:8080/remover/' + objCadastrar.id,{
      method:'delete',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      // * Mensagem
      alert(retorno_convertido.mensage);

      // * Cópia do vetor de vagas
      let vetorTemp = [...vagas];

      // * Indice
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objCadastrar.id
      });

      // * Remover vaga do vetorTemp
      vetorTemp.splice(indice, 1);

      // * Atualizar o vetor de vagas
      setVagas(vetorTemp);

      // * Limpar formulario
      limparFormulario();

    })
  }

  // * Limpar formulario
  const limparFormulario = () => {
    setObjCadastrar(vaga);
    setBtnCadastrar(true);
  }

  // * Selecionar vaga
  const selecionarVaga = (indice) => {
    setObjCadastrar(vagas[indice]);
    setBtnCadastrar(false);
  }

  return (
    <div>
      <Navbar />
      <C.Container>
        <Formulario
          botao={btnCadastrar}
          eventoTeclado={aoDigitar}
          cadastrar={cadastrar}
          obj={objCadastrar}
          cancelar={limparFormulario}
          remover={remover}
          alterar={alterar}
        />
        <Tabela
          vetor={vagas}
          selecionar={selecionarVaga}
        />
      </C.Container>
    </div>
  );
};

export default CadastroVagas;