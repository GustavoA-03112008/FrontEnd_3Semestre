import "./App.css";

// import Saudacao from "./components/exercicio1/Saudacao";

// import Produto from "./components/exercicio2/Produto";

// import Perfil from "./components/exercicio3/Perfil.jsx";
// import "./components/exercicio3/Perfil.css";

// import Botao from "./components/exercicio4/Botao";
// import "./components/exercicio4/Botao.css";

// import Filme from "./components/exercicio5/Filme";
// import "./components/exercicio5/Filme.css";

// import Aluno from "./components/exercicio6/Aluno";
// import "./components/exercicio6/Aluno.css";

// import Card from "./components/exercicio7/Card";
// import "./components/exercicio7/Card.css";

// import Contato from "./components/exercicio8/Contato";
// import "./components/exercicio8/Contato.css";

// import Jogo from "./components/exercicio9/Jogo";
// import "./components/exercicio9/Jogo.css";

// import ItemLoja from "./components/exercicio10/Loja";
// import "./components/exercicio10/Loja.css";


import Pessoa from "./components/desafio/Pessoa";
import "./components/desafio/Pessoa.css";


function App() {




  const pessoas = [
    {
      id: 1,
      nome: "Gustavo",
      idade: 17,
      cidade: "Santo André",
      foto: "https://tse1.mm.bing.net/th/id/OIP.1_lefKGgSO-dNxEH575AwAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      id: 2,
      nome: "Leticia",
      idade: 14,
      cidade: "São Paulo",
      foto: "https://tse1.mm.bing.net/th/id/OIP.1_lefKGgSO-dNxEH575AwAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      id: 3,
      nome: "Felipe",
      idade: 18,
      cidade: "Rio de Janeiro",
      foto: "https://tse1.mm.bing.net/th/id/OIP.1_lefKGgSO-dNxEH575AwAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];


  return (




    
    <div>



      

      {/* EXERCÍCIO 01
      <Saudacao nome="Gustavo" />
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />

     */}
      
      {/* EXERCÍCIO 02

      <Produto
        nome="Notebook"
        preco="3500"
        descricao="Notebook gamer"
      />

      <Produto
        nome="Mouse"
        preco="150"
        descricao="Mouse RGB"
      />

      <Produto
        nome="Teclado"
        preco="250"
        descricao="Teclado mecânico"
      />

       */}

      
      
      {/* EXERCÍCIO 03

      <Perfil
        nome="Carlos"
        idade="30"
        profissao="Programador"
      /> */}

      

      
      
      {/* EXERCÍCIO 04

      <Botao texto="Salvar" cor="blue" />
      <Botao texto="Excluir" cor="green" />
      <Botao texto="Editar" cor="orange" /> */}

     

{/*       
      
      EXERCÍCIO 05

      <Filme
        titulo="Vingadores"
        ano="2019"
        genero="Ação"
        nota="9.5"
      />

      */}

      
      
      {/* EXERCÍCIO 06

      <Aluno
        nome="curtis"
        curso="Desenvenvolvimento de Sistemas"
        imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/50_Cent_at_Globen_Stockholm4.jpg/250px-50_Cent_at_Globen_Stockholm4.jpg"
      /> */}

     

      
      
      {/* EXERCÍCIO 07

      <Card>
        <h2>Conteúdo dentro do Card</h2>
        <p>Usando children</p>
      </Card> */}

     

      
      
      {/* EXERCÍCIO 08

      <Contato
        nome="Gustavo"
        telefone="11 96381-2714"
        email="gustavo.a.silva54@aluno.senai.br"
      /> */}

     

      
      
      {/* EXERCÍCIO 09

      <Jogo
        nome="Grand Theft Auto V"
        plataforma="playstation 5"
        preco="159,89"
        imagem="https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png"
      /> */}

     

      
      
      {/* EXERCÍCIO 10

      <ItemLoja
        nome="Monitor"
        preco="900"
        categoria="Eletrônicos"
        estoque={5}
      /> */}

     

      
      
      DESAFIO

      {pessoas.map((pessoa) => (
        <Pessoa
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          cidade={pessoa.cidade}
          foto={pessoa.foto}
        />
      ))}

     

  

    </div>
  );
}

export default App;