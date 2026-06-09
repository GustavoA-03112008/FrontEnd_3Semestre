import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import Perfil from "./components/perfil/Perfil";
import Header from "./components/header/header";
import Produto from "./components/produto/Produto";
import CadastroProduto from "./components/cadastroprodutos/CadastroProdutos";
import ListaProduto from "./components/listaproduto/ListarProdutos";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={<Produto />} />

       

<Route
  path="/cadastrarproduto"
  element={
    <PrivateRoute>
      <CadastroProduto />
    </PrivateRoute>
  }
/>

        <Route path="/listaproduto" element={<ListaProduto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;