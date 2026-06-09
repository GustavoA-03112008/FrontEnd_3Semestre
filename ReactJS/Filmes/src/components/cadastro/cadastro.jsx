import "./Cadastro.css";
import Botao from "../botao/botao";

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form
                onSubmit={props.funcCadastro}
                className="layout_grid form_cadastro"
            >
                <h1>{props.tituloCadastro}</h1>

                <hr />

                <div className="campos_cadastro">

                    {/* NOME */}
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>

                        <input
                            type="text"
                            name="nome"
                            placeholder={`Digite o nome do ${props.placeholder}`}
                            value={props.valor}
                            onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>

                    {/* GÊNERO */}
                    <div
                        className="campo_cad_genero"
                        style={{ display: props.visibilidade }}
                    >
                        <label htmlFor="genero">Gênero</label>

                     <select
                    value={props.genero || ""}
                    onChange={(e) =>
                        props.setGenero &&
                        props.setGenero(e.target.value)
                    }
                >
                    <option value="">
                        Selecione
                    </option>

                    {props.listaGeneros?.map((g) => (
                        <option
                            key={g.idGenero}
                            value={g.idGenero}
                        >
                            {g.nome}
                        </option>
                    ))}
                </select>
                    </div>

                    {/* IMAGEM */}
                    {props.setImagem && (
                        <div className="campo_cad_imagem">
                            <label htmlFor="imagem">Imagem</label>

                            <input
                                type="file"
                                name="imagem"
                                accept="image/*"
                                onChange={(e) =>
                                    props.setImagem(
                                        e.target.files[0]
                                    )
                                }
                            />
                        </div>
                    )}

                    {/* BOTÃO CADASTRAR */}
                    <Botao nomeDoBotao="Cadastrar" />

                    {/* BOTÃO CANCELAR */}
                    {props.btnEditar && (
                        <Botao
                            nomeDoBotao="Cancelar"
                            cancelarEdicao={props.cancelarEdicao}
                            btnEditar={props.btnEditar}
                        />
                    )}
                </div>
            </form>
        </section>
    );
};

export default Cadastro;