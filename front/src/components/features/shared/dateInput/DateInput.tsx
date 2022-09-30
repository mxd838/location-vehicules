const DateInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.type}>{props.label}</label>
      <input type="date" name={props.type} id={props.type} />
    </>
  )
}

export default DateInput
