const TextInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type="text"
        name={props.category}
        id={props.category}
        onChange={props.dataHandler}
      />
    </>
  )
}

export default TextInput
