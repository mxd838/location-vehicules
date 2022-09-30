import { useState } from "react"
import CreateForm from "../../createForm/CreateForm"

const Panel = (props: any) => {
  const [showPanel, setShowPanel] = useState(false)

  const togglePanelDisplay = () => {
    setShowPanel(!showPanel)
  }

  return (
    <div>
      <h3>Panel {props.type}</h3>
      <button className="togglePanel" onClick={togglePanelDisplay}>
        {props.button}
      </button>
      {showPanel ? <CreateForm type={props.type} /> : <></>}
    </div>
  )
}

export default Panel
