import moment from "moment"
import { useState } from "react"
import { Renting } from "../../../../models/Renting"
import Button from "../../../shared/button/Button"
import DateInput from "../../shared/dateInput/DateInput"
import SelectInput from "../../shared/selectInput/SelectInput"

// TODO
// need to request vehicles too
// to retrieve vehicle characteristics
const RentingForm = () => {
  const rentingFormData: Renting = {
    vehicleId: "",
    clientId: "",
    beginDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD")
  }

  const [responseBody, setResponseBody] = useState<Renting>(rentingFormData)

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setResponseBody({ ...responseBody, [name]: value })
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(responseBody)
  }
  return (
    <div>
      Renting Form
      <form onSubmit={submitHandler}>
        {/* date */}
        <DateInput
          category="begin"
          name="Début: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        <DateInput
          category="end"
          name="Fin: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* client name */}
        <SelectInput
          category="clientName"
          name="Client: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* link to new user creation */}
        <Button type="link" name="Nouveau Client ?" />
        {/* type, brand and model of vehicle */}
        <SelectInput
          category="vehicleType"
          name="Type: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        <SelectInput
          category="vehicleBrand"
          name="Marque: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        <SelectInput
          category="vehicleModel"
          name="Modèle: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        <div>Price</div>
        {/* validation button */}
        <Button type="submitForm" name="Créer" />
      </form>
    </div>
  )
}

export default RentingForm
