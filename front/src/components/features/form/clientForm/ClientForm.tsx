import Button from "../../../shared/button/Button"
import DateInput from "../../shared/dateInput/DateInput"
import EmailInput from "../../shared/emailInput/EmailInput"
import TelInput from "../../shared/telInput/TelInput"
import TextInput from "../../shared/textInput/TextInput"

const ClientForm = () => {
  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log("ok")
  }
  return (
    <div>
      Client Form
      <form onSubmit={submitHandler}>
        {/* nom */}
        <TextInput category="lastName" name="Nom: " />
        {/* prenom */}
        <TextInput category="firstName" name="Prénom" />
        {/* email */}
        <EmailInput />
        {/* tel */}
        <TelInput />
        {/* birthday */}
        <DateInput type="birthday" label="Date de naissance: " />
        {/* validation button */}
        <Button name="Valider" />
      </form>
    </div>
  )
}

export default ClientForm
