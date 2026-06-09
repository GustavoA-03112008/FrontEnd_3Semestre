import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {
  const { usuario, setUsuario } = useContext(UsuarioContext);

  const logout = () => {
    localStorage.removeItem("usuario")
    setUsuario(null);
  };

  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/perfil"}>Perfil</Link>{" "}
        <Link to={"/produto"}>Produto</Link>{" "}
        <Link to={"/cadastrarproduto"}>Cadastrar Produto</Link>{" "}
        <Link to={"/listaproduto"}>Listar Produto</Link>{""}
      </nav>

      <h2>
        Bem-vindo, {usuario ? usuario : "Visitante"}
      </h2>

      <button onClick={logout}>
        Sair
      </button>
    </header>
  );
};

export default Header;