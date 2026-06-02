function Pessoa({ nome, idade, cidade, foto }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "200px"
      }}
    >
      <img src={foto} alt={nome} width="150" />
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>
    </div>
  );
}

export default Pessoa;