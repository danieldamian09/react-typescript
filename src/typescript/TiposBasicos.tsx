const TiposBasicos = () => {
	const nombre: string = "Humberto";
	// nombre = 33 // No se puede asignar un número a un string
	// nombre + . podemos ver todos los métodos que tiene el string
	const edad: number = 35;
  const estaActivo: boolean = true;
  
  // Arrays de Strings
  const poderes: string[] = ["Volar", "Rayos X", "Super Fuerza"];
  //poderes.push(1); // No se puede asignar un número a un array de strings

	return (
		<>
			<h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? "Esta Activo" : "No esta Activo"}
      <br />
      {poderes.join(", ")}
		</>
	);
};

export default TiposBasicos;
