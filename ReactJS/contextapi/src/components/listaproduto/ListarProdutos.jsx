import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const ListaProduto = () => {
  const { produto } = useContext(ProdutoContext);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      {produto.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produto.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaProduto;