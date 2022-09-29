import DataRow from "./dataRow/DataRow"
import HeaderRow from "./headerRow/HeaderRow"

const Table = ({ type, tableData }: any) => {
  let columnNames: any = []
  // TODO
  // make a switch with 3 possibilities
  if (type === "clients") {
    columnNames = ["Nom", "Prénom", "Date de naissance", "E-mail", "Téléphone"]
  } else if (type === "rentings") {
  }
  console.log(tableData)
  return (
    <>
      <h2>Table</h2>
      <HeaderRow />
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
