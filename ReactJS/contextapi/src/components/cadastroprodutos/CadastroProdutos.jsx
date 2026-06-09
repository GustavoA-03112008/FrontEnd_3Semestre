import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const CadastroProduto = () => {
  const { produto, setProduto } = useContext(ProdutoContext);
  const [novoProduto, setNovoProduto] = useState("");

  const cadastrarProduto = () => {
    if (novoProduto.trim() === "") return;

    setProduto([...produto, novoProduto]);
    setNovoProduto("");
  };

  return (
    <div>
      <h1>Cadastro de Produto</h1>

      <input
        type="text"
        value={novoProduto}
        onChange={(e) => setNovoProduto(e.target.value)}
      />

      <button onClick={cadastrarProduto}>
        Cadastrar
      </button>

      <p>Produto que será cadastrado: {novoProduto}</p>
    </div>
  );
};

export default CadastroProduto;