import { useContext, useState } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'

const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState("")

    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")
    }

    return (
        <div>
            <h2>Página de perfil ({usuario})</h2>

            <input
                type="text"
                placeholder="Digite o novo usuário"
                value={novoUsuario}
                onChange={(e) => setNovoUsuario(e.target.value)}
            />

            <button onClick={login}>
                Entrar
            </button>

            <p>
                Novo Usuário: <strong>{novoUsuario}</strong>
            </p>
        </div>
    )
}

export default Perfil