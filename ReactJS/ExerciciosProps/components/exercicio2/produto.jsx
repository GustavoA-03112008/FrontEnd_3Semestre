import "./produto.css"

const Produto = ({ nome, preco, descricao }) => {
  return (
    <p>Produto: {nome} <br />
        preco: {preco.tofixed(2)}
        descricao: {descricao}    
    </p>
  )
}

export default Produto