export const PostFormulario = () => {
  return (
    <>
      <form>
        <input
          type="text"
          name="id"
          placeholder="Ingrese el lugar del usuario a actualizar"
        />
        <input type="text" name="nombre" placeholder="Ingrese el nombre" />
        <input type="text" name="apellido" placeholder="Ingrese el apellido" />
        <input type="text" name="curso" placeholder="Ingrese el curso" />
      </form>
    </>
  );
};
