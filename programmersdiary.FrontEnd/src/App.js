import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WrapperGlobal } from "./styles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import UserProvider from "./contexts/Auth";
import RequireAuth from "./pages/RequireAuth";
import Cadastro from "./pages/Cadastro";
import Atualizar from "./pages/Atualizar";

function App() {
  return (
    <>
      <UserProvider>
        <WrapperGlobal>
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
        </WrapperGlobal>
      </UserProvider>
    </>
  );
}

export default App;
