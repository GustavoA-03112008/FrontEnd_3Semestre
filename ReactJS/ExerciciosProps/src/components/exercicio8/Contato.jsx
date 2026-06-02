import './Contato.css';


function Contato({ nome, telefone, email }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Contato;