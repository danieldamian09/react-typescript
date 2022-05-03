import {useEffect, useState} from "react";
import { reqResApi } from '../api/reqRes';
import { ReqRespListado, Usuario } from "../interfaces/reqRes";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);


  useEffect(() => {
    // llamado API
    reqResApi.get<ReqRespListado>("/users").then(res => {
      setUsuarios(res.data.data);
    }).catch(err => console.log(err));
  }, [])
  


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
        <tbody>

        </tbody>
      </table>
		</>
	);
};

export default Usuarios;
