const RadioInputGroup = (props: any) => {
  return (
    <>
      <input
        type="radio"
        name={props.category}
        id={`${props.category}-a`}
        value="a"
        onChange={props.dataHandler}
        checked
      />
      <label htmlFor="">A</label>
      <input
        type="radio"
        name={props.category}
        id={`${props.category}-a`}
        value="b"
        onChange={props.dataHandler}
      />
      <label htmlFor="">B</label>
      <input
        type="radio"
        name={props.category}
        id={`${props.category}-a`}
        value="c"
        onChange={props.dataHandler}
      />
      <label htmlFor="">C</label>
      <input
        type="radio"
        name={props.category}
        id={`${props.category}-a`}
        value="d"
        onChange={props.dataHandler}
      />
      <label htmlFor="">D</label>
    </>
  )
}

export default RadioInputGroup
