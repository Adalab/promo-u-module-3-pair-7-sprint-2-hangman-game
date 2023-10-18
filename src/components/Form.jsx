

function Form({lastLetter, handleLastLetter}) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
      };
  
    return (
    <form className="form" onSubmit={handleSubmit}>
    <label className="title" htmlFor="last-letter">
      Escribe una letra:
    </label>
    <input
      autoComplete="off"
      className="form__input"
      maxLength="1"
      type="text"
      name="last-letter"
      id="last-letter"
      value={lastLetter}
      onChange={handleLastLetter}
    />
  </form>
  )
}

export default Form;


