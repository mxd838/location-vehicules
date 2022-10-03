import moment from "moment"

// TODO
// pour creation client (recoit birthdate)
// verif que plus de 18 ans
// Attention :
// event onchange => date envoyee dans formulaire uniquement si date changee (n enovie pas date par defaut)
const DateInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.category}>{props.name}</label>
      <input
        type="date"
        name={props.category}
        id={props.category}
        defaultValue={moment().format("YYYY-MM-DD")}
        onChange={props.dataHandler}
      />
    </>
  )
}

export default DateInput
