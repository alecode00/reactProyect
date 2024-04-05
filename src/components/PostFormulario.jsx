import { useEffect, useState } from "react";

export const PostFormulario = ({handleDisplay}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState(null);

  useEffect(() => {}, [nombre]);
  useEffect(() => {}, [apellido]);
  useEffect(() => {}, [curso]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDisplay({
      nombre: nombre,
      apellido: apellido,
      curso: curso,
    });
  };

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleApellido = (event) => {
    setApellido(event.target.value);
  };
  const handleCurso = (event) => {
    setCurso(event.target.value);
  };

  return (
    <>
      <form>
        <input
          value={nombre}
          type="text"
          onChange={handleNombre}
          name="nombre"
          placeholder="Ingrese el nombre"
          required
        />
        <input
          value={apellido}
          type="text"
          onChange={handleApellido}
          name="apellido"
          placeholder="Ingrese el apellido"
          required
        />
        <input
          value={curso}
          type="text"
          onChange={handleCurso}
          name="curso"
          placeholder="Ingrese el curso"
          required
        />
        <button type="submit" onSubmit={handleSubmit}>
          Guardar
        </button>
      </form>
    </>
  );
};
