import DataCell from "../dataCell/DataCell"

const DataRow = ({ rowData }: any) => {
  // TODO
  // put this function in utils folder
  const originalRowData = Object.entries(rowData)
  const rowDataArray = []
  for (let i = 0; i < originalRowData.length; i++) {
    if (originalRowData[i][0] !== "__v" && originalRowData[i][0] !== "_id") {
      rowDataArray.push(originalRowData[i])
    }
  }

  return (
    <>
      {rowDataArray.map((cellData: any, index: any) => (
        <DataCell key={index} cellData={cellData} />
      ))}
    </>
  )
}

export default DataRow
