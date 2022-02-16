import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WrapperGlobal } from "./styles";
import EditionProvider from "./context/Edition/Edition";
import CriationProvider from "./context/Criation/Criation";

function App() {
  return (
    <>
      <CriationProvider>
        <EditionProvider>
          <WrapperGlobal>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </WrapperGlobal>
        </EditionProvider>
      </CriationProvider>
    </>
  );
}

export default App;
