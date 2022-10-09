import { useEffect, useState } from "react"
import VehiclesService from "../../services/Vehicles.service"
import { Vehicle } from "../../models/Vehicle"
import Nav from "../../components/layout/nav/Nav"
import Table from "../../components/layout/table/Table"
import Panel from "../../components/features/shared/panel/Panel"
import PanelButton from "../../components/features/shared/panelButton/PanelButton"

const Vehicles = () => {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([])

  const [showPanel, setShowPanel] = useState(false)

  const togglePanelDisplay = () => {
    setShowPanel(!showPanel)
  }

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
      <PanelButton
        handleClick={togglePanelDisplay}
        name="Nouveau Véhicule"
        class="togglePanel"
      />
      <Panel resource="vehicles" showPanel={showPanel} type="creation" />
      <Table resource="vehicles" tableData={vehiclesData} />
    </>
  )
}

export default Vehicles
