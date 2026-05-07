import "./App.css";

// import Saudacao from "./componentes/exercicio01/Saudacao";
// import Produto from "./componentes/exercicio02/Produto";
// import Perfil from "./componentes/exercicio03/Perfil";
// import Botao from "./componentes/exercicio04/Botao";
// import Filme from "./componentes/exercicio05/Filme";
// import Aluno from "./componentes/exercicio06/Aluno";
// import Card from "./componentes/exercicio07/Card";
// import Contato from "./componentes/exercicio08/Contato";
// import Jogo from "./componentes/exercicio09/Jogo";
// import ItemLoja from "./componentes/exercicio10/Loja";
import"./componentes/exercicio03/Perfil.css"
import"./componentes/exercicio04/Botao.css"
import"./componentes/exercicio06/Aluno.css"
import"./componentes/exercicio07/Card.css"
import"./componentes/exercicio08/Contato.css"
import"./componentes/exercicio09/Jogo.css"
import"./componentes/exercicio10/Loja.css"
import"./componentes/exercicio11/Pessoa.css"

import Pessoa from "./componentes/exercicio02/Produto.jsx";
const App = () => {
  const pessoas = [
    {
      id: 1,
      nome: "Maria Silva",
      idade: 28,
      cidade: "São Paulo",
      foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    {
      id: 2,
      nome: "João Santos",
      idade: 35,
      cidade: "Rio de Janeiro",
      foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    {
      id: 3,
      nome: "Ana Oliveira",
      idade: 22,
      cidade: "Belo Horizonte",
      foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    }
  ];

  return (
    <>
      {/* <Saudacao nome="Eduardo" />
      <Saudacao nome="Maria" />
      <Saudacao nome="Lucas" /> */}

      {/* <Produto
        nome="Geladeira"
        preco={2500}
        descricao="Geladeira frost free de 400 litros"
      /> */}

      {/* <Perfil
        nome="Maria"
        idade={30}
        profissao="Engenheira de Software"
      /> */}

      {/* <Botao texto="Botão" cor="red" /> */}

      {/* <Filme
        titulo="Madagascar"
        ano={2005}
        genero="Animação"
        nota={8}
      /> */}

      {/* <Aluno
        nome="João"
        curso="Engenharia de Software"
        imagem="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      /> */}

      {/* <Card>
        <h2>Conteúdo do Card</h2>
        <p>Conteúdo dentro do Card</p>
      </Card> */}

      {/* <Contato
        nome="Maria"
        telefone="(11) 98765-4321"
        email="maria@example.com"
      /> */}

      {/* <Jogo
        nome="Homem Aranha"
        plataforma="PlayStation 4"
        preco={199.99}
        imagem="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      /> */}

      {/* <ItemLoja
        nome="Notebook"
        preco={3500}
        categoria="Eletrônicos"
        estoque={10}
      /> */}

      <h1>Exercicio 11</h1>

      {pessoas.map((pessoa) => (
        <Pessoa
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          cidade={pessoa.cidade}
          foto={pessoa.foto}
        />
      ))}
    </>
  );
};

export default App;