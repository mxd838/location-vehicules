import "./DataCell.scss"

const DataCell = ({ cellData }: any) => {
  return (
    <>
      <div className="dataCell">{cellData[1]}</div>
    </>
  )
}

export default DataCell
