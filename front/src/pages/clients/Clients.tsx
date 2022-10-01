import { useEffect, useState } from "react"
import ClientsService from "../../services/Clients.service"
import { Client } from "../../models/Client"
import Nav from "../../components/layout/nav/Nav"
import Table from "../../components/layout/table/Table"
import Panel from "../../components/features/shared/panel/Panel"

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
      <Panel resource="clients" button="Nouveau Client" type="creation" />
      <Table resource="clients" tableData={clientsData} />
    </>
  )
}

export default Clients
