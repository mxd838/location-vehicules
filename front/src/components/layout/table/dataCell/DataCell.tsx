const DataCell = ({ cellData }: any) => {
  return (
    <>
      <div className={cellData[0]}>{cellData[1]}</div>
    </>
  )
}

export default DataCell
