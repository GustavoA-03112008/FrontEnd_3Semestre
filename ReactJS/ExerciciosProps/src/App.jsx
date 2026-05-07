import "./App.css";
import Saudacao from "./components/exercicio1/Saudacao"

const App = () => {
  return (
    <>
      <Saudacao nome="Gustavo" />
      <Saudacao nome="Davi" />
      <Saudacao nome="Maria" />
    </>
  );
};

export default App;