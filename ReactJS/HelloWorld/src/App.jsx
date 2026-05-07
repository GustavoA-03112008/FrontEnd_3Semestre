import './App.css';
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/Title/title';
function App() {
  return(
    <>
      <Title nome="Gustavo" sobrenome="Augusto" texto="Bem Vindo, sou Título" />
      <Title texto="Eu sou outro título"/>
      <Paragrafo textoParagrafo="Este é o meu parágrafo"/>
    </>
  );
}

export default App