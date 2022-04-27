const Funciones = () => {
  const sumar = (a:number, b:number):number => {
    return a + b;
  };

	return (
		<>
			<h3>Funciones</h3>
			<span>El resultado de la suma es: {sumar(2, 3)}</span>
		</>
	);
};

export default Funciones;
