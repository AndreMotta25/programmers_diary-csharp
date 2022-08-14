import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

import UserProvider from "./contexts/Auth";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/RequireAuth";
import Cadastro from "./pages/Cadastro";
import Atualizar from "./pages/Atualizar";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <UserProvider>
        <S.WrapperGlobal>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
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
        {/* <S.ShadowContainer>
          <Notification>O seu token expirou</Notification>
        </S.ShadowContainer> */}
      </UserProvider>
    </>
  );
}

export default App;
