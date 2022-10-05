import DataRow from "./dataRow/DataRow"
import HeaderRow from "./headerRow/HeaderRow"
import "./Table.scss"

const Table = ({ resource, tableData }: any) => {
  let columnNames: any = []

  if (resource === "clients") {
    columnNames = ["Nom", "Prénom", "Date de naissance", "E-mail", "Téléphone"]
  } else if (resource === "rentings") {
    columnNames = ["Véhicule", "Client", "Date début", "Date fin"]
  } else if (resource === "vehicles") {
    columnNames = [
      "Type",
      "Marque",
      "Modèle",
      "Immatriculation",
      "État",
      "Prix à la journée"
    ]
  }
  return (
    <>
      <div className="table">
        <HeaderRow columnNames={columnNames} />
        {tableData.map((rowData: any, index: string) => (
          <DataRow key={index} rowData={rowData} resource={resource} />
        ))}
      </div>
    </>
  )
}

export default Table
