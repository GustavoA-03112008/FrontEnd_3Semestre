// Perfil.jsx

function Perfil({ nome, idade, profissao }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
        margin: "10px"
      }}
    >
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default Perfil;