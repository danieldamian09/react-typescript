interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion{
  pais: string;
  ciudad: string;
  casa: number;
}


const ObjetosLiterales = () => {

	const persona: Persona = {
		nombre: "Humberto",
		apellido: "Rivero",
		edad: 38,
		direccion: {
			pais: "Argentina",
			ciudad: "Buenos Aires",
			casa: 615,
		},
  };
  
  // persona.nuevo = "Casa de la muerte"; // No se puede agregar una propiedad a un objeto

	return (
		<>
			<h3>Objetos Literales</h3>
			<code>
        <pre>{JSON.stringify(persona, null, 2)}</pre> 
        {/* podemos usar en el replacer ["nombre"]  despues de persona*/}
			</code>
		</>
	);
};

export default ObjetosLiterales;
