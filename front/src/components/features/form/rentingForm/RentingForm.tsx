import Button from "../../../shared/button/Button"
import DateInput from "../../shared/dateInput/DateInput"
import SelectInput from "../../shared/selectInput/SelectInput"

const RentingForm = () => {
  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log("ok")
  }
  return (
    <div>
      Renting Form
      <form onSubmit={submitHandler}>
        {/* date */}
        <DateInput type="begin" label="Début: " />
        <DateInput type="end" label="Fin: " />
        {/* client name */}
        <SelectInput type="clientName" label="Client: " />
        {/* link to new user creation */}
        <Button type="link" name="Nouveau Client ?" />
        {/* type, brand and model of vehicle */}
        <SelectInput type="vehicleType" label="Type: " />
        <SelectInput type="vehicleBrand" label="Marque: " />
        <SelectInput type="vehicleModel" label="Modèle: " />
        <div>Price</div>
        {/* validation button */}
        <Button type="submitForm" name="Créer" />
      </form>
    </div>
  )
}

export default RentingForm
