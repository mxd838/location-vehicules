import DataRow from "./dataRow/DataRow"
import HeaderRow from "./headerRow/HeaderRow"
import "./Table.scss"

const Table = (props: any) => {
  let columnNames: any = []

  if (props.resource === "clients") {
    columnNames = ["Nom", "Prénom", "Date de naissance", "E-mail", "Téléphone"]
  } else if (props.resource === "rentings") {
    columnNames = ["Véhicule", "Client", "Date début", "Date fin"]
  } else if (props.resource === "vehicles") {
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
        {props.tableData.map((rowData: any, index: string) => (
          <DataRow key={index} rowData={rowData} resource={props.resource} />
        ))}
      </div>
    </>
  )
}

export default Table
