import Button from "../../../shared/button/Button"
import NumberInput from "../../shared/numberInput/NumberInput"
import SelectInput from "../../shared/selectInput/SelectInput"
import TextInput from "../../shared/textInput/TextInput"

const VehicleForm = () => {
  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log("ok")
  }
  return (
    <div>
      vehicle form
      <form onSubmit={submitHandler}>
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
    </div>
  )
}

export default VehicleForm
