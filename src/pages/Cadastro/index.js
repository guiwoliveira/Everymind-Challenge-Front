import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo_completo from "../../assets/logo_completo.png"

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { cadastro } = useAuth();

  const handleCadastro = () => {
    if (!nome | !email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = cadastro(nome, email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <img src={logo_completo}/>
      <C.Content>
        <C.Label>Nome</C.Label>
        <Input
          type="nome"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <C.Label>Email</C.Label>
        <Input
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.Label>Senha</C.Label>
        <Input
          type="password"
          placeholder="************"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={handleCadastro} />
        <C.LabelLogin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelLogin>
      </C.Content>
    </C.Container>
  );
};

export default Cadastro;