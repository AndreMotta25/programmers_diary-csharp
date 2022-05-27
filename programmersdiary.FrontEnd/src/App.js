import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WrapperGlobal } from "./styles";
import ManipulateProvider from "./context/ManipulaItem/ManipulateItem";
import NewItemProvider from "./context/NewItem/NewItem";
import OldItemProvider from "./context/OldItem/OldItem";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ManipulateProvider>
        <NewItemProvider>
          <OldItemProvider>
            <WrapperGlobal>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <ToastContainer />
            </WrapperGlobal>
          </OldItemProvider>
        </NewItemProvider>
      </ManipulateProvider>
    </>
  );
}

export default App;
