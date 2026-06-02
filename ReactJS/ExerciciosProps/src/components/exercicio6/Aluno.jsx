// Aluno.jsx
function Aluno({ nome, curso, imagem }) {
  return (
    <div>
      <img src={imagem} alt={nome} width="150" />
      <h2>{nome}</h2>
      <p>{curso}</p>
    </div>
  );
}

export default Aluno;