const NumberInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type="number"
        name={props.category}
        id={props.category}
        min={props.min}
        step={props.step}
      />
    </>
  )
}

export default NumberInput
