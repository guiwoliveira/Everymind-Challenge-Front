import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo_completo from "../../assets/logo_completo.png"

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = login(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <img src={logo_completo}/>
      <C.Content>
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
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelCadastro>
          Não tem uma conta?
          <C.Strong>
            <Link to="/cadastro">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelCadastro>
      </C.Content>
    </C.Container>
  );
};

export default Login;