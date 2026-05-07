const Botao = ({ texto, cor }) => {
  return (
    <button style={{
      backgroundColor: cor,
      color: "white",
      margin: "5px"
    }}>
      {texto}
    </button>
  );
};

export default Botao;