const Aluno = ({nome, curso, imagem}) => {
    return (
        <h2>Nome: {nome}</h2>,
        <p>Curso: {curso}</p>,
        <img src={imagem} alt={nome} />)
}