import DataRow from "./dataRow/DataRow"
import HeaderRow from "./headerRow/HeaderRow"

const Table = ({ resource, tableData }: any) => {
  let columnNames: any = []
  // TODO
  // make a switch with 3 possibilities
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
  console.log(tableData)
  return (
    <>
      <h2>Table</h2>
      {columnNames.map((columnName: any, index: string) => (
        <HeaderRow key={columnName} name={columnName} />
      ))}
      {tableData.map((rowData: any, index: string) => (
        <DataRow key={index} rowData={rowData} />
      ))}
    </>
  )
}

export default Table
