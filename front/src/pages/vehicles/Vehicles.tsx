import { useEffect, useState } from "react"
import VehiclesService from "../../services/Vehicles.service"
import { Vehicle } from "../../models/Vehicle"
import Nav from "../../components/layout/nav/Nav"

const Vehicles = () => {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([])

  useEffect(() => {
    VehiclesService.getAll().then((response) => {
      console.log(response)
      if (response.statusText === "OK") {
        setVehiclesData(response.data)
      }
    })
  }, [])

  return (
    <>
      <h2>Vehicles</h2>
      <Nav />
    </>
  )
}

export default Vehicles
