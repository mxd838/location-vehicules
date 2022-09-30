import { useState } from "react"
import Form from "../../Form/Form"

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
      {showPanel ? <Form resource={props.resource} /> : <></>}
    </div>
  )
}

export default Panel
