import moment from "moment"

// TODO
// pour creation client (recoit birthdate)
// verif que plus de 18 ans
// Attention :
// event onchange => date envoyee dans formulaire uniquement si date changee (n enovie pas date par defaut)
const DateInput = (props: any) => {
  let defaultDate = ""
  if (props.category === "birthdate") {
    defaultDate = moment().subtract(18, "years").format("YYYY-MM-DD")
  } else {
    defaultDate = moment().format("YYYY-MM-DD")
  }
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type="date"
        name={props.category}
        id={props.category}
        defaultValue={defaultDate}
        onChange={props.dataHandler}
      />
    </>
  )
}

export default DateInput
