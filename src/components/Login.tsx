import {useReducer, useEffect} from "react";

// Creamos la Interface de mi estado Inicial
interface AuthSate {
	validando: boolean;
	token: string | null;
	username: string;
	nombre: string;
}

// Defino mi estado inicial jamas se debe modificar se debe retornar un nuevo estado
const initialState: AuthSate = {
	validando: true,
	token: null,
	username: "",
	nombre: "",
};

// Type para el payload de la accion Login
type LoginActionPayload = {
	username: string;
	nombre: string;
};

// Creamos la accion que preferiblemte la manejamos como type (porque son objetos planos y no lo vamos a expandir en el futuro)
type AuthAction =
	| {type: "logout"}
	| {type: "login"; payload: LoginActionPayload};

// Creamos la función (reducer) que recibe el estado y la acción(modifica el estado)
const authReducer = (state: AuthSate, action: AuthAction): AuthSate => {
	switch (action.type) {
		case "logout":
			return {
				validando: false,
				token: null,
				username: "",
				nombre: "",
			};

		case "login":
			const {username, nombre} = action.payload;
			return {
				validando: false,
				token: "ABC123",
				nombre,
				username,
			};

		default:
			return state;
	}
};

const Login = () => {
	const [{validando, token, nombre}, dispatch] = useReducer(
		authReducer,
		initialState
	);

	useEffect(() => {
		setTimeout(() => {
			dispatch({type: "logout"});
		}, 1500);
	}, []);

	// Funcion para disparar la accion de login
	const login = () => {
		dispatch({
			type: "login",
			payload: {username: "Humber09", nombre: "Humberto"},
		});
	};

	const logout = () => {
		dispatch({type: "logout"});
	};

	// Mensaje de validando en la UI
	if (validando) {
		return (
			<>
				<h3>Login</h3>
				<div className="alert alert-info">Validando...</div>
			</>
		);
	}

	return (
		<>
			<h3>Login</h3>

			{token ? (
				<div className="alert alert-success">Autenticado como: {nombre}</div>
			) : (
				<div className="alert alert-danger">No Autenticado</div>
			)}

			{token ? (
				<button className="btn btn-danger mx-3" onClick={logout}>
					Logout
				</button>
			) : (
				<button className="btn btn-primary" onClick={login}>
					Login
				</button>
			)}
		</>
	);
};

export default Login;
