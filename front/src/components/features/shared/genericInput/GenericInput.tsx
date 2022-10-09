const GenericInput = (props: any) => {
  // replace text, number, tel, email
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type={props.type}
        name={props.category}
        id={props.category}
        min={props.min}
        step={props.step}
        onChange={props.dataHandler}
      />
    </>
  )
}

export default GenericInput
