const SelectInput = (props: any) => {
  // TODO
  // replace hard coded options by the ones from the db
  return (
    <>
      <label htmlFor={props.type}>{props.label}</label>
      <select name={props.type} id={props.type}>
        <option value={`${props.type}-1`}>{`${props.type}-1`}</option>
        <option value={`${props.type}-2`}>{`${props.type}-2`}</option>
        <option value={`${props.type}-3`}>{`${props.type}-3`}</option>
      </select>
    </>
  )
}

export default SelectInput
