import { useState } from "react";
import "./cadfruta.css"

function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const [arrfrutas, setArrFrutas] = useState([
        { id: 1, nome: "Mamão", quantidade: 10 },
        { id: 2, nome: "Abacate", quantidade: 20 },
    ])

    function Cadastrar(e) {

        e.preventDefault();

        setArrFrutas([
            ...arrfrutas,
            {
                id: Date.now(),
                nome: fruta,
                quantidade: quantidade
            }
        ])

        limpaeFormulario()
    }

    function limpaeFormulario() {
        setFruta("")
        setQuantidade("")
    }

    return (

        <section className="sessao-cadastro">

            <h1>Cadastro</h1>

            <form onSubmit={Cadastrar}>

                <fieldset className="cadastro">

                    <label
                        htmlFor="fruta"
                        className="cadastro__rotulo"
                    >
                        Digite o nome da fruta
                    </label>

                    <input
                        type="text"
                        id="fruta"
                        className="cadastro__entrada"
                        placeholder="Digite o nome da Fruta"
                        value={fruta}
                        onChange={(e) => {
                            setFruta(e.target.value)
                        }}
                    />

                    <input
                        type="number"
                        id="quantidade"
                        className="cadastro__Q-entrada"
                        placeholder="Digite a quantidade"
                        value={quantidade}
                        onChange={(e) => {
                            setQuantidade(e.target.value)
                        }}
                    />

                    <br />

                    <button
                        type="submit"
                        className="cadastro__btn-Q-cadastrar"
                    >
                        Cadastrar
                    </button>

                </fieldset>

            </form>

            <ul className="listagem">

                {
                    arrfrutas.map((f) => {
                        return (
                            <li key={f.id}>
                                Fruta: {f.nome} |
                                Quantidade: {f.quantidade}
                            </li>
                        )
                    })
                }

            </ul>

        </section>
    )
}

export default CadFruta;