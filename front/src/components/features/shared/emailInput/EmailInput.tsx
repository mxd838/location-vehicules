const EmailInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type="email"
        name={props.category}
        id={props.category}
        onChange={props.dataHandler}
      />
    </>
  )
}

export default EmailInput
