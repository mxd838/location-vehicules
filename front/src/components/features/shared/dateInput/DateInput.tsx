import moment from "moment"

const DateInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type="date"
        name={props.type}
        id={props.type}
        defaultValue={moment().format("YYYY-MM-DD")}
      />
    </>
  )
}

export default DateInput
