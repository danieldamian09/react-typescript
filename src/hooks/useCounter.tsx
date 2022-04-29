import {useState} from "react";

const useCounter = ( initial:number = 10) => {
  const [contador, setContador] = useState(initial);
  
  const acumular = (numero: number) => { setContador(contador + numero) };
  
  return { contador, acumular };

}

export default useCounter