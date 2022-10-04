const SelectInput = (props: any) => {
  // TODO
  // replace hard coded options by the ones from the db
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <select
        name={props.category}
        id={props.category}
        onChange={props.dataHandler}
      >
        <option value={`${props.category}-1`}>{`${props.category}-1`}</option>
        <option value={`${props.category}-2`}>{`${props.category}-2`}</option>
        <option value={`${props.category}-3`}>{`${props.category}-3`}</option>
      </select>
    </>
  )
}

export default SelectInput
