// import Panel from "../../../features/shared/panel/Panel"
import { useState } from "react"
import Panel from "../../../features/shared/panel/Panel"
import DataCell from "../dataCell/DataCell"
import "./DataRow.scss"

const DataRow = (props: any) => {
  // TODO
  // put this function in utils folder
  const originalRowData = Object.entries(props.rowData)
  const rowDataArray = []
  for (let i = 0; i < originalRowData.length; i++) {
    if (originalRowData[i][0] !== "__v" && originalRowData[i][0] !== "_id") {
      rowDataArray.push(originalRowData[i])
    }
  }

  const [showPanel, setShowPanel] = useState(false)

  const togglePanelDisplay = () => {
    setShowPanel(!showPanel)
  }

  return (
    <>
      <div className="dataRow" onClick={togglePanelDisplay}>
        {rowDataArray.map((cellData: any, index: any) => (
          <DataCell key={index} cellData={cellData} />
        ))}
      </div>
      <Panel
        resource={props.resource}
        showPanel={showPanel}
        type="modification"
      />
    </>
  )
}

export default DataRow
