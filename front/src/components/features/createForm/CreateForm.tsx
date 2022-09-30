import Button from "../../shared/button/Button"
import DateInput from "../shared/dateInput/DateInput"
import NumberInput from "../shared/numberInput/NumberInput"
import SelectInput from "../shared/selectInput/SelectInput"
import TextInput from "../shared/textInput/TextInput"

const CreateForm = (props: any) => {
  if (props.type === "rentings") {
    return (
      <>
        <h3>Renting Form</h3>
        <form>
          {/* date */}
          <DateInput />
          <DateInput />
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
  } else if (props.type === "clients") {
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
          <DateInput />
          {/* validation button */}
          <Button />
        </form>
      </>
    )
  } else if (props.type === "vehicles") {
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

export default CreateForm
