import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ProdutoProvider } from "./context/ProdutoProvider";
import { UsuarioProvider } from "./context/UsuarioProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsuarioProvider>
      <ProdutoProvider>
        <App />
      </ProdutoProvider>
    </UsuarioProvider>
  </React.StrictMode>
);