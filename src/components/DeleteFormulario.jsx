import { useEffect, useState } from "react";

export const DeleteFormulario = ({handleDisplay}) => {
  const [id, setId] = useState(null);

  useEffect(() => {}, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDisplay({
      id: id,
    });
  };

  const handleId = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <input
        value={id}
        type="text"
        onChange={handleId}
        name="id"
        placeholder="Ingrese el id a actualizar"
        required
      />
      <button type="submit" onSubmit={handleSubmit}>
        Borrar
      </button>
    </>
  );
};
