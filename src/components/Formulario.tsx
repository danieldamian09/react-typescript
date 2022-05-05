import useForm from "../hooks/useForm";


const Formulario = () => {

  const {formulario, email, password ,handleChange} = useForm({
		email: "test@mail.com",
		password: "123456",
	});  

  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => handleChange(e.target.value, 'email')}
      />
      
      <input
        type="text"
        className="form-control mt-2 mb-2" 
        placeholder="Password"
        name="password"
        id="password"
        value={password}
        onChange={({target}) => handleChange(target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2) }</pre>
      </code>

    </>
  )
}

export default Formulario