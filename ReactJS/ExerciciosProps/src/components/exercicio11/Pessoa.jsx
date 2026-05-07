const Pessoa = ({ nome, idade, cidade, foto }) => {
  return (
    <div>
      <img src={foto} alt={nome} width="120" />
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>
    </div>
  );
};

export default Pessoa;