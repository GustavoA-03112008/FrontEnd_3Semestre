import "./ciclodevida.css";
import { useEffect, useState } from "react";

export default function CicloDeVida(){
const [contador, setContador] = useState(0);
useEffect(() =>{
    console.log("Componente MONTADO");
    
}, []);

useEffect(() => {
    console.log("componente ATUALIZADO")
    console.log(`valor do comtador ${contador}`);

}, []);

return (
    <>
    <h1>Contador: {contador}</h1>
    <button onClick={() => {
        setContador(contador + 1);
    }}>Contar</button>
    </>
)
}