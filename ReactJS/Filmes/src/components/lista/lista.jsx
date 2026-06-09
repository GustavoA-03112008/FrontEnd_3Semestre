import "./Lista.css";
import faltacartaz from "../../assets/img/download.png";

import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>
                <hr />

                <div className="tabela">
                    <table>

                        <thead>
                            <tr className="table_cabecalho">
                                <th>Nome</th>
                                <th style={{ display: props.visibilidade }}>
                                    Imagem
                                </th>
                                <th style={{ display: props.visibilidade }}>
                                    Gênero
                                </th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tbody>

                            {props.lista && props.lista.length > 0 ? (

                                props.lista.map((item) => (

                                    <tr
                                        className="item_lista"
                                        key={
                                            props.tipoLista === "genero"
                                                ? item.idGenero
                                                : item.idFilme
                                        }
                                    >

                                        <td data-cell="Nome">
                                            {
                                                props.tipoLista === "genero"
                                                    ? item.nome
                                                    : item.titulo
                                            }
                                        </td>

                                        <td
                                            data-cell="Imagem"
                                            style={{ display: props.visibilidade }}
                                        >
                                            <img
                                                className="img_cartaz"
                                                src={
                                                    !item.imagem
                                                        ? faltacartaz
                                                        : `https://localhost:7258/imagens/${item.imagem}`
                                                }
                                                alt="Imagem"
                                            />
                                        </td>

                                        <td
                                            data-cell="Gênero"
                                            style={{ display: props.visibilidade }}
                                        >
                                            {
                                                props.tipoLista === "filme"
                                                    ? item.idGeneroNavigation?.nome || "-"
                                                    : "-"
                                            }
                                        </td>

                                        <td data-cell="Editar">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcEditar(item)}
                                            >
                                                <img
                                                    src={Editar}
                                                    alt="Editar"
                                                />
                                            </button>
                                        </td>

                                        <td data-cell="Excluir">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcExcluir(item)}
                                            >
                                                <img
                                                    src={Excluir}
                                                    alt="Excluir"
                                                />
                                            </button>
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="5">
                                        Nenhum registro encontrado.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default Lista;