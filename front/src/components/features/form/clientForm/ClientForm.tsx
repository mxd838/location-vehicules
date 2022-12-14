import moment from "moment"
import React, { useState } from "react"
import { Client } from "../../../../models/Client"
import ClientsService from "../../../../services/Clients.service"
import Button from "../../../shared/button/Button"
import DateInput from "../../shared/dateInput/DateInput"
import GenericInput from "../../shared/genericInput/GenericInput"

// TODO
// - type all files with this model
// - send create request with userdata
// - do the modifyForm variation

const ClientForm = () => {
  const clientFormData: Client = {
    lastName: "",
    firstName: "",
    birthdate: moment().subtract(18, "years").format("YYYY-MM-DD"),
    email: "",
    phone: ""
  }

  const [responseBody, setResponseBody] = useState<Client>(clientFormData)

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setResponseBody({ ...responseBody, [name]: value })
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(responseBody)
    // TODO
    // implement axios request
    ClientsService.create(responseBody)
  }

  return (
    <div>
      Client Form
      <form onSubmit={submitHandler}>
        {/* nom */}
        <GenericInput
          category="lastName"
          name="Nom: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* prenom */}
        <GenericInput
          category="firstName"
          name="Prénom: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* email */}
        <GenericInput
          category="email"
          name="E-Mail: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* tel */}
        <GenericInput
          category="phone"
          name="Téléphone: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* birthday */}
        <DateInput
          category="birthdate"
          name="Date de naissance: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* validation button */}
        <Button name="Valider" />
      </form>
    </div>
  )
}

export default ClientForm
