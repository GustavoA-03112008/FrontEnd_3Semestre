import CadastroProduto from "./components/CadastroProdutos.jsx";
import ListaProduto from "./components/ListaProdutos.jsx";
import { ProdutoProvider } from "./context/ProdutoContext.jsx";

function App() {
  return (
    <ProdutoProvider>
      <div>
        <h1>Sistema de Produtos</h1>

        <CadastroProduto />

        <hr />

        <ListaProduto />
      </div>
    </ProdutoProvider>
  );
}

export default App;