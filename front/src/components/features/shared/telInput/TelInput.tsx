const TelInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type="tel"
        name={props.category}
        id={props.category}
        onChange={props.dataHandler}
      />
    </>
  )
}

export default TelInput
