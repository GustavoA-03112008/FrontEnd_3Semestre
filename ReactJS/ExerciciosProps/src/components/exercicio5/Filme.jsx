const Filme = ({ titulo, ano, genero, nota }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>Ano: {ano}</p>
      <p>Gênero: {genero}</p>
      <p>Nota: {nota}</p>
    </div>
  );
};

export default Filme;