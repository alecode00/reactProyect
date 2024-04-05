export const GetFormulario = ({handleDisplay}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    handleDisplay(1)
  }
  return (
    <>
      <button onClick={handleSubmit} >GET</button>
    </>
  ); 
};
