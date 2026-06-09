import "./Botao.css";

const Botao = ({
    nomeDoBotao,
    cancelarEdicao,
    btnEditar
}) => {

    return (
        <button
            className="botao"
            type={btnEditar ? "button" : "submit"}
            onClick={cancelarEdicao}
        >
            {nomeDoBotao}
        </button>
    );
};

export default Botao;