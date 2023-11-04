import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import CadastroVagas from "../pages/CadastroVagas";
import VerVagas from "../pages/VerVagas";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/cadastro-vagas" element={<Private Item={CadastroVagas} />} />
          <Route exact path="/vagas" element={<Private Item={VerVagas} />} />
          <Route path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;