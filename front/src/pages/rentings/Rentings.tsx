import { useEffect, useState } from "react"
import RentingsService from "../../services/Rentings.service"
import { Renting } from "../../models/Renting"
import Nav from "../../components/layout/nav/Nav"
import Table from "../../components/layout/table/Table"
import Panel from "../../components/features/shared/panel/Panel"
import PanelButton from "../../components/features/shared/panelButton/PanelButton"

const Rentings = () => {
  const [rentingsData, setRentingsData] = useState<Renting[]>([])

  useEffect(() => {
    RentingsService.getAll().then((response) => {
      if (response.statusText === "OK") {
        setRentingsData(response.data)
      }
    })
  }, [])
  return (
    <>
      <h2>Rentings</h2>
      <Nav />
      <PanelButton type="rentings" />
      <Panel type="rentings" />
      <Table type="rentings" tableData={rentingsData} />
    </>
  )
}

export default Rentings
