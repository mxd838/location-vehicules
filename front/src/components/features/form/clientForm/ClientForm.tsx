import React, { useState } from "react"
import { Client } from "../../../../models/Client"
import Button from "../../../shared/button/Button"
import DateInput from "../../shared/dateInput/DateInput"
import EmailInput from "../../shared/emailInput/EmailInput"
import TelInput from "../../shared/telInput/TelInput"
import TextInput from "../../shared/textInput/TextInput"

// TODO
// - type all files with this model

const ClientForm = () => {
  const clientFormData: Client = {
    lastName: "",
    firstName: "",
    birthdate: "",
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
  }

  return (
    <div>
      Client Form
      <form onSubmit={submitHandler}>
        {/* nom */}
        <TextInput
          category="lastName"
          name="Nom: "
          dataHandler={(e: any) => inputChangeHandler(e)}
        />
        {/* prenom */}
        <TextInput category="firstName" name="Prénom: " />
        {/* email */}
        <EmailInput category="email" name="E-Mail: " />
        {/* tel */}
        <TelInput category="phone" name="Téléphone: " />
        {/* birthday */}
        <DateInput type="birthday" label="Date de naissance: " />
        {/* validation button */}
        <Button name="Valider" />
      </form>
    </div>
  )
}

export default ClientForm
