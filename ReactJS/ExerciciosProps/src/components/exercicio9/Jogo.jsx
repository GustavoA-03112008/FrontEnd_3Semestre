
import './Jogo.css';


function Jogo({ nome, plataforma, preco, imagem }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "220px",
        margin: "10px"
      }}
    >
      <img src={imagem} alt={nome} width="200" />
      <h2>{nome}</h2>
      <p>Plataforma: {plataforma}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}

export default Jogo;