import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

import UserProvider, { UserContext } from "./contexts/Auth";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/RequireAuth";
import Cadastro from "./pages/Cadastro";
import Atualizar from "./pages/Atualizar";
import Notification from "./components/Notification";

import { useNavigate } from "react-router-dom";

function App() {
  const [tokenExpire, setTokenExpire] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (tokenExpire)
      setTimeout(() => {
        setTokenExpire(false);
        navigate("/");
      }, 5000);
  }, [tokenExpire]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    let timer;
    if (token && user?.email) {
      const timeToExpire = jwt_decode(token).exp * 1000;
      timer = setInterval(() => {
        if (Date.now() >= timeToExpire && user?.email) {
          setTokenExpire(true);
          clearInterval(timer);
        }
        console.log(user);
        console.log("Contando...");
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [user]);

  return (
    <>
      {/* <UserProvider> */}
      <S.WrapperGlobal>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home tokenExpired={setTokenExpire} />
              </RequireAuth>
            }
          />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route
            path="/atualizar"
            element={
              <RequireAuth>
                <Atualizar />
              </RequireAuth>
            }
          />
        </Routes>
        <ToastContainer />
      </S.WrapperGlobal>
      {tokenExpire && (
        <S.ShadowContainer>
          <Notification>O seu token expirou</Notification>
        </S.ShadowContainer>
      )}
      {/* </UserProvider> */}
    </>
  );
}

export default App;
