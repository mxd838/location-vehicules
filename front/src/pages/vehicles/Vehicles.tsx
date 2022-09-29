import { useEffect, useState } from "react"
import VehiclesService from "../../services/Vehicles.service"
import { Vehicle } from "../../models/Vehicle"
import Nav from "../../components/layout/nav/Nav"
import Table from "../../components/layout/table/Table"
import Panel from "../../components/features/shared/panel/Panel"
import PanelButton from "../../components/features/shared/panelButton/PanelButton"

const Vehicles = () => {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([])

  useEffect(() => {
    VehiclesService.getAll().then((response) => {
      if (response.statusText === "OK") {
        setVehiclesData(response.data)
      }
    })
  }, [])

  return (
    <>
      <h2>Vehicles</h2>
      <Nav />
      <PanelButton type="vehicles" />
      <Panel type="vehicles" />
      <Table type="vehicles" tableData={vehiclesData} />
    </>
  )
}

export default Vehicles
