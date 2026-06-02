import "./ciclodevida.css";
import { useEffect, useState } from "react";

export default function CicloDeVida(){
const [contador, setContador] = useState(0);
useEffect(fnCallback,[])
useEffect(fnCallback,[contador])
useEffect(fnCallback,[contador])
useEffect(fnCallback)

return (
    <>
    <h1>Contador: {contador}</h1>
    <button onClick={() => {
        setContador(contador + 1);
    }}>Contar</button>
    </>
)
}