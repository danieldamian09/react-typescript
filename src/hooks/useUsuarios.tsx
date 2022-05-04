import {useEffect, useState, useRef} from "react";
import {reqResApi} from "../api/reqRes";
import {ReqRespListado, Usuario} from "../interfaces/reqRes";

const useUsuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

	// Referencia para la paginacion
	const paginaRef = useRef(1);
	// console.log(paginaRef.current);

	useEffect(() => {
		// llamado API
		cargarUsuarios();
	}, []);

	const cargarUsuarios = async () => {
		const resp = await reqResApi.get<ReqRespListado>("/users", {
			params: {
				page: paginaRef.current,
			},
		});


		if (resp.data.data.length > 0) {
			setUsuarios(resp.data.data);
			paginaRef.current++;
			console.log(paginaRef.current);
		} else {
			alert("No hay mas usuarios");
		}
	};

  return {usuarios, cargarUsuarios};

}

export default useUsuarios