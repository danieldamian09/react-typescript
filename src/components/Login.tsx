import { useReducer } from 'react'

// Creamos la Interface de mi estado Inicial
interface AuthSate{
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string,
}


// Defino mi estado inicial
const initialState: AuthSate = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
}

// Creamos la accion que preferiblemte la manejamos como type (porque son objetos planos y no lo vamos a expandir en el futuro)
type AuthAction = {type: "logout" }


// Creamos la función (reducer) que recibe el estado y la acción(modifica el estado)
const authReducer = (state: AuthSate, action: AuthAction): AuthSate => {

}

const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      <h3>Login</h3>

      <div className="alert alert-info">
        Validando...
      </div>
      <div className="alert alert-danger">
        No autenticado
      </div>

      <div className="alert alert-success">
        Autenticado
      </div>

      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  )
}

export default Login