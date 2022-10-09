import { useEffect, useState } from "react"
import ClientsService from "../../services/Clients.service"
import { Client } from "../../models/Client"
import Nav from "../../components/layout/nav/Nav"
import Table from "../../components/layout/table/Table"
import Panel from "../../components/features/shared/panel/Panel"
import PanelButton from "../../components/features/shared/panelButton/PanelButton"

const Clients = () => {
  const [clientsData, setClientsData] = useState<Client[]>([])

  const [showPanel, setShowPanel] = useState(false)

  const togglePanelDisplay = () => {
    setShowPanel(!showPanel)
  }

  useEffect(() => {
    ClientsService.getAll().then((response) => {
      if (response.statusText === "OK") {
        setClientsData(response.data)
      }
    })
  }, [])

  return (
    <>
      <h2>Clients</h2>
      <Nav />
      <PanelButton
        handleClick={togglePanelDisplay}
        name="Nouveau Client"
        class="togglePanel"
      />
      <Panel resource="clients" showPanel={showPanel} type="creation" />
      <Table resource="clients" tableData={clientsData} />
    </>
  )
}

export default Clients
