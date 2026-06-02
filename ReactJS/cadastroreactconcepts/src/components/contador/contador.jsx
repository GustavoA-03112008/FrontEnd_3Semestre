import { useState } from "react";
import "./contador.css";

const Contador = () => {

    const [valor, setValor] = useState(0);

    // função de incremento
    function incremento() {
        if (valor === 10) {
            setValor(0);
        } else {
            setValor(valor + 1);
        }
    }

    // função de decremento
    function decremento() {
        // não deixa ficar negativo
        if (valor > 0) {
            setValor(valor - 1);
        }
    }

    return (
        <>
            <p>Contagem: {valor}</p>

            <button onClick={incremento}>
                ++
            </button>

            <button onClick={decremento}>
                --
            </button>
        </>
    );
}

export default Contador;