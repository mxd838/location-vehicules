import Button from "../../shared/button/Button"
import DateInput from "../shared/dateInput/DateInput"
import NumberInput from "../shared/numberInput/NumberInput"
import SelectInput from "../shared/selectInput/SelectInput"
import TextInput from "../shared/textInput/TextInput"

const Form = (props: any) => {
  if (props.resource === "rentings") {
    return (
      <>
        <h3>Renting Form</h3>
        <form>
          {/* date */}
          <DateInput type="begin" label="Début: " />
          <DateInput type="end" label="Fin: " />
          {/* name */}
          <SelectInput />
          {/* link to new user creation */}
          <Button />
          {/* type, brand and model of vehicle */}
          <SelectInput />
          <SelectInput />
          <SelectInput />
          <div>Price</div>
          {/* validation button */}
          <Button />
        </form>
      </>
    )
  } else if (props.resource === "clients") {
    return (
      <>
        <h3>Client form</h3>
        <form>
          {/* nom */}
          <TextInput />
          {/* prenom */}
          <TextInput />
          {/* email */}
          <TextInput />
          {/* tel */}
          <TextInput />
          {/* birthday */}
          <DateInput type="birthday" label="Date de naissance: " />
          {/* validation button */}
          <Button />
        </form>
      </>
    )
  } else if (props.resource === "vehicles") {
    return (
      <>
        <h3>Vehicle form</h3>
        <form>
          {/* type */}
          <SelectInput />
          {/* brand */}
          <SelectInput />
          {/* model */}
          <SelectInput />
          {/* licence plate */}
          <TextInput />
          {/* price per day */}
          <NumberInput />
          {/* validation button */}
          <Button />
        </form>
      </>
    )
  } else {
    return <>Create form</>
  }
}

export default Form
