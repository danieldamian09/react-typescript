import useCounter from '../hooks/useCounter';


const ContadorConHook = () => {

	const { contador, acumular} = useCounter(100);
  
	return (
		<>
			<h3>
				🧐 Contador con Hook: <small>{contador}</small>
			</h3>
			<button className="btn btn-primary mx-3" onClick={() => acumular(1)}>+1</button>
			<button className="btn btn-primary" onClick={() => acumular(-1)}>-1</button>
		</>
	);
};

export default ContadorConHook;
