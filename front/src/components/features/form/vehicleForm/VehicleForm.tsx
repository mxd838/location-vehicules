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
        <SelectInput type="vehicleType" label="Type: " />
        {/* brand */}
        <SelectInput type="vehicleBrand" label="Marque: " />
        {/* model */}
        <SelectInput type="vehicleModel" label="Modèle: " />
        {/* licence plate */}
        <TextInput category="licensePlate" name="Immatriculation: " />
        {/* price per day */}
        <NumberInput category="price" name="Prix: " min="50" step="10" />
        {/* validation button */}
        <Button name="Valider" />
      </form>
    </div>
  )
}

export default VehicleForm
