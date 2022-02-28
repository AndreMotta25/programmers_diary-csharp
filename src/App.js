import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WrapperGlobal } from "./styles";
import ManipulateProvider from "./context/ManipulaItem/ManipulateItem";

function App() {
  return (
    <>
      <ManipulateProvider>
        <WrapperGlobal>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </WrapperGlobal>
      </ManipulateProvider>
    </>
  );
}

export default App;
