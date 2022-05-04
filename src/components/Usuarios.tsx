import useUsuarios from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

const Usuarios = () => {
	
	const {usuarios, cargarUsuarios} = useUsuarios();

	const renderItem = ({avatar, first_name, last_name, email, id}: Usuario) => {
		return (
			<tr key={id.toString()}>
				<td>
					<img
						src={avatar}
						alt={first_name}
						style={{width: 35, borderRadius: 100}}
					/>
				</td>
				<td>
					{first_name} {last_name}
				</td>
				<td>{email}</td>
			</tr>
		);
	};

	return (
		<>
			<h3>Usuarios</h3>
			<table className="table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>{usuarios.map(renderItem)}</tbody>
			</table>
			<button className="btn btn-primary" onClick={cargarUsuarios}>
				Anteriores
			</button>
			<button className="btn btn-primary mx-2" onClick={cargarUsuarios}>
				Siguientes
			</button>
		</>
	);
};

export default Usuarios;
