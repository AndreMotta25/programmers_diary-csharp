import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WrapperGlobal } from "./styles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <WrapperGlobal>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer />
      </WrapperGlobal>
    </>
  );
}

export default App;
