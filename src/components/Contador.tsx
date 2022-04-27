import {useState} from "react";

const Contador = () => {
  const [contador, setContador] = useState(10);
  
  const acumular = (numero:number) => { setContador(contador + numero) };

	return (
		<>
			<h3>
				🧐 Contador: <small>{contador}</small>
			</h3>
			<button className="btn btn-primary mx-3" onClick={() => acumular(1)}>+1</button>
			<button className="btn btn-primary" onClick={() => acumular(-1)}>-1</button>
		</>
	);
};

export default Contador;
