import {useState} from "react";

const useForm = <T extends Object>(data: T) => {
	const [formulario, setFormulario] = useState(data);

	// Funcionm para leer los datos del formulario como lo vamos a hacer en React Native
	const handleChange = (value: string, campo: keyof T) => {
		setFormulario({
			...formulario,
			[campo]: value,
		});
	};

	return {...formulario, formulario, handleChange};
};

export default useForm;
