import { useEffect, useState } from "react"
import ClientsService from "../../services/Clients.service"
import { Client } from "../../models/Client"
import Nav from "../../components/layout/nav/Nav"

const Clients = () => {
  const [clientsData, setClientsData] = useState<Client[]>([])

  useEffect(() => {
    ClientsService.getAll().then((response) => {
      console.log(response)
      if (response.statusText === "OK") {
        setClientsData(response.data)
      }
    })
  }, [])

  return (
    <>
      <h2>Clients</h2>
      <Nav />
      {clientsData.map((clientData) => {
        return <div>clientData</div>
      })}
    </>
  )
}

export default Clients
