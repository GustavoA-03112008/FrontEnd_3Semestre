import "./produtospage.css"
import { useEffect, useState } from "react"

export const ProdutosPages = () => {

  // lista
  const [listaProdutos, setListaProdutos] = useState([]);

  // states
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("hero.png");

  // edição
  const [editar, setEditar] = useState(false);
  const [idProduto, setIdProduto] = useState(null);

  //função get dados
  async function getDados() {

    try {

      const retornoAPI = await fetch("http://localhost:3000/produtos");

      const dados = await retornoAPI.json();

      setListaProdutos(dados);

    } catch (error) {

      console.log(error);

    }

  }

  // função deletar
  async function Deletar(id) {

    try {

      const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
      });

      if (response.status === 200) {
        alert("Produto apagado com sucesso")
        getDados()
      } else {
        alert("Erro ao apagar produto")
      }

    } catch (error) {
      console.log(error);
    }

  }

  // carregar produtos
  useEffect(() => {

    getDados();

  }, []);

  // limpar formulário
  function limparFormulario() {
    setTitulo("");
    setCategoria("");
    setPreco(0);
    setEstoque(0);
    setDescricao("");
    setImagem("hero.png");
  }

  // cadastrar produto
  const cadastrar = async (e) => {

    e.preventDefault();

    // validação
    if (
      titulo.trim().length === 0 ||
      categoria.trim().length === 0 ||
      preco <= 0 ||
      estoque <= 0
    ) {

      alert("Preencha todos os campos corretamente");

      return;
    }

    // objeto
    const novoProduto = {
      titulo,
      categoria,
      descricao,
      preco,
      estoque,
      imagem
    };

    try {

      const resposta = await fetch("http://localhost:3000/produtos", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(novoProduto)

      });

      const produtoCadastrado = await resposta.json();

      // adiciona na lista
      setListaProdutos([
        ...listaProdutos,
        produtoCadastrado
      ]);

      limparFormulario();

      alert("Produto cadastrado!");

    } catch (error) {

      console.log(error);

    }

  };

  // editar produto
  const editarProduto = async (e) => {

    e.preventDefault();

    const produtoAtualizado = {
      titulo,
      categoria,
      descricao,
      preco,
      estoque,
      imagem
    };

    try {

      await fetch(`http://localhost:3000/produtos/${idProduto}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(produtoAtualizado)

      });

      alert("Produto atualizado!");

      getDados();

      limparFormulario();

      setEditar(false);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <>
      <header>
        <h1 className="titulo-header">
          Meu Estoque
        </h1>
      </header>

      <main className="container">

        {/* FORMULÁRIO */}
        <section className="form-section">

          <h2>
            {editar ? "Editar Produto" : "Cadastrar Produto"}
          </h2>

          <form id="formProduto" onSubmit={editar ? editarProduto : cadastrar}>

            <input
              className="class-input"
              type="text"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
              placeholder="Nome do produto"
              required
            />

            <input
              className="class-input"
              type="text"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
              placeholder="Categoria"
              required
            />

            <textarea
              className="class-input"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
              placeholder="Descrição"
            />

            <input
              className="class-input"
              type="number"
              value={preco}
              onChange={(e) => {
                setPreco(Number(e.target.value));
              }}
              placeholder="Preço"
              min={0}
              required
            />

            <input
              className="class-input"
              type="number"
              value={estoque}
              onChange={(e) => {
                setEstoque(Number(e.target.value));
              }}
              placeholder="Estoque"
              min={0}
              required
            />

            <input
              className="class-input"
              type="text"
              value={imagem}
              onChange={(e) => {
                setImagem(e.target.value);
              }}
              placeholder="Nome da imagem"
              required
            />

            {editar && (
              <button
                type="button"
                onClick={() => {
                  setEditar(false);
                  limparFormulario();
                }}
              >
                Cancelar
              </button>
            )}

            <button
              type="submit"
              className="button"
            >
              Salvar
            </button>

          </form>

        </section>

        {/* LISTA */}
        <section className="lista-section">

          <h2 className="h2-card">
            Lista de Produtos
          </h2>

          {listaProdutos.map((p) => {

            return (

              <div
                key={`${p.id}-${p.titulo}`}
                className="cards"
                id="cardsProdutos"
              >

                <img
                  src={`/images/${p.imagem}`}
                  alt={p.titulo}
                />

                <h3>
                  {p.titulo}
                </h3>

                <span className="categoria">
                  {p.categoria}
                </span>

                <p className="preco">
                  R$ {p.preco}
                </p>

                <p className="estoque">
                  Estoque: {p.estoque} <strong>X</strong>
                </p>

                <a href="" onClick={(e) => {
                  e.preventDefault()
                  Deletar(p.id)
                }}>
                  Apagar
                </a>

                <a href="" onClick={(e) => {

                  e.preventDefault();

                  setIdProduto(p.id);

                  setTitulo(p.titulo);
                  setCategoria(p.categoria);
                  setDescricao(p.descricao);
                  setPreco(p.preco);
                  setEstoque(p.estoque);
                  setImagem(p.imagem);

                  setEditar(true);

                }}>
                  Editar
                </a>

              </div>

            );

          })}

        </section>

      </main>
    </>
  );

};