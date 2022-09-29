import { useEffect, useState } from "react"
import ClientsService from "../../services/Clients.service"
import { Client } from "../../models/Client"
import Nav from "../../components/layout/nav/Nav"
import Table from "../../components/layout/table/Table"
import PanelButton from "../../components/features/shared/panelButton/PanelButton"
import Panel from "../../components/features/shared/panel/Panel"

// TODO
// - send type of form as props
// - conditional rendering with panelButton to display ,or not, create panel
const Clients = () => {
  const [clientsData, setClientsData] = useState<Client[]>([])

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
      <PanelButton type="clients" />
      <Panel type="clients" />
      <Table type="clients" tableData={clientsData} />
    </>
  )
}

export default Clients
