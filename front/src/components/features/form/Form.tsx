import Button from "../../shared/button/Button"
import ClientForm from "./clientForm/ClientForm"
import RentingForm from "./rentingForm/RentingForm"
import VehicleForm from "./vehicleForm/VehicleForm"

const Form = (props: any) => {
  // if props.type == creation
  // -- send create request (createResourceItem)
  // if update
  // -- send update request (updateResourcItem)
  if (props.resource === "rentings") {
    return <RentingForm />
  } else if (props.resource === "clients") {
    return <ClientForm />
  } else if (props.resource === "vehicles") {
    return <VehicleForm />
  } else {
    return <>Create form</>
  }
}

export default Form
