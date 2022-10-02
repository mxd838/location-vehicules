const EmailInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.email}>{props.name}</label>
      <input type="email" name={props.email} id={props.email} />
    </>
  )
}

export default EmailInput
