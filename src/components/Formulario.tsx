import { useState } from 'react';


const Formulario = () => {

  const [formulario, setFormulario] = useState({
    email: 'test@mail.com',
    password: '123456',
  })

  // Funcionm para leer los datos del formulario como lo vamos a hacer en React Native
  const handleChange = (value:string, campo:string) => {
    setFormulario({
      ...formulario,
      [campo]: value
    })
  }

  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        name="email"
        id="email"
        value={formulario.email}
        onChange={(e) => handleChange(e.target.value, 'email')}
      />
      
      <input
        type="text"
        className="form-control mt-2 mb-2" 
        placeholder="Password"
        name="password"
        id="password"
        value={formulario.password}
        onChange={({target}) => handleChange(target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2) }</pre>
      </code>

    </>
  )
}

export default Formulario