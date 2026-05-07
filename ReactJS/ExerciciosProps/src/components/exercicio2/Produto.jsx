const Produto = ({ nome, preco, descricao }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço: R$ {preco}</p>
      <p>{descricao}</p>
    </div>
  );
};

export default Produto;