import { useState } from "react";
import Contador from "./components/contador/contador";
import CadFruta from "./components/cadFruta/cadfruta.jsx";
import CicloDeVida from "./components/ciclodevida/ciclodevida.jsx";

function App() {

  // objeto privado
  const [mostrar, setmostrar] = useState(true);


  const [nome, setnome] = useState("google")

  function trocarTexto() {
    setNome("Microsoft");
  }

  function fuiAbandonado() {
    setNome("Input foi abandonado :(");
  }

  return (
    <>
      {/* <h1>{nome} Page</h1>

      <button onClick={trocarTexto}>
        Mudar Texto
      </button>

      <button onClick={() => {
        return setNome("Yahoo");
      }}>
        Mudar Texto
      </button>

      <br /> */}

      {/* evento - evento disparado: change */}
      {/* target - quem disparou o evento change */}
      {/* value - valor do input que disparou o evento change */}

      {/* <input
        type="text"
        onBlur={fuiAbandonado}
        onChange={(evento) => setNome(evento.target.value)}
      />

      <br /><br />

      <Contador />

      <br /><br />

      <p>
        Lorem ipsum <strong>{nome}</strong> dolor sit amet
      </p> */}
      <button> onClick={() =>{
        setmostrar(!mostrar);

      }}mostrar / OCULTAR</button>
      <CicloDeVida/>
    </>
  );
}

export default App;