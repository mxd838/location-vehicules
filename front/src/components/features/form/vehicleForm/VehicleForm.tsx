import React, { useState } from "react"
import { Vehicle } from "../../../../models/Vehicle"
import VehiclesService from "../../../../services/Vehicles.service"
import Button from "../../../shared/button/Button"
import GenericInput from "../../shared/genericInput/GenericInput"
import RadioInputGroup from "../../shared/radioInputGroup/RadioInputGroup"
import SelectInput from "../../shared/selectInput/SelectInput"

const VehicleForm = () => {
  const vehicleFormData: Vehicle = {
    type: "type-1",
    brand: "brand-1",
    model: "model-1",
    licensePlate: "",
    state: "a",
    pricePerDay: 0
  }

  const [responseBody, setResponseBody] = useState<Vehicle>(vehicleFormData)

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setResponseBody({ ...responseBody, [name]: value })
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(responseBody)
    VehiclesService.create(responseBody)
  }
  return (
    <div>
      vehicle form
      <form onSubmit={submitHandler}>
        {/* type */}
        <SelectInput
          category="type"
          name="Type: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* state */}
        <RadioInputGroup
          category="state"
          name="État: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />

        {/* brand */}
        <SelectInput
          category="brand"
          name="Marque: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* model */}
        <SelectInput
          category="model"
          name="Modèle: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* licence plate */}
        <GenericInput
          category="licensePlate"
          name="Immatriculation: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* price per day */}
        <GenericInput
          category="pricePerDay"
          name="Prix: "
          min="50"
          step="10"
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* validation button */}
        <Button name="Valider" />
      </form>
    </div>
  )
}

export default VehicleForm
