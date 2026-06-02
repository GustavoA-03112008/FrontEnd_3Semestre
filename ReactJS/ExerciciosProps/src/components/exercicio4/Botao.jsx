// Botao.jsx
function Botao({ texto, cor }) {
  return (
    <button
      style={{
        backgroundColor: cor,
        color: "white",
        padding: "10px",
        border: "none",
        margin: "5px"
      }}
    >
      {texto}
    </button>
  );
}

export default Botao;