import { useEffect, useState } from "react";



export const PutFormulario = ({handleDisplay}) => {
  const [id ,setId] = useState(null)
  const [nombre ,setNombre] = useState('')
  const [apellido ,setApellido] = useState('')
  const [curso ,setCurso] = useState(null)

  useEffect( () => {

  }, [id] )
  useEffect( () => {

  }, [nombre] )
  useEffect( () => {

  }, [apellido] )
  useEffect( () => {

  }, [curso] )

  const handleSubmit = (event) => {
    event.preventDefault()
    handleDisplay({
      id: id,
      nombre: nombre,
      apellido: apellido,
      curso: curso,
  })
  }
const handleId = (event) =>{
  setId(event.target.value)
}
const handleNombre = (event) =>{
  setNombre(event.target.value)
}
const handleApellido = (event) =>{
  setApellido(event.target.value)
}
const handleCurso = (event) =>{
  setCurso(event.target.value)
}

  return (
    <>
      <form>
        <input value={id} type="text" onChange={handleId} name="id" placeholder="Ingrese el id a actualizar" required/>
        <input value={nombre} type="text" onChange={handleNombre} name="nombre" placeholder="Ingrese el nombre" required/>
        <input value={apellido} type="text" onChange={handleApellido} name="apellido" placeholder="Ingrese el apellido"required/>
        <input value={curso} type="text" onChange={handleCurso} name="curso" placeholder="Ingrese el curso" required/>
        <button type="submit" onSubmit={handleSubmit} >Actualizar</button>
      </form>
    </>
  );
};
