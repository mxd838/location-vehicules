import { useState } from "react"
import Form from "../../form/Form"
import PanelButton from "../panelButton/PanelButton"

const Panel = (props: any) => {
  const [showPanel, setShowPanel] = useState(false)

  const togglePanelDisplay = () => {
    setShowPanel(!showPanel)
  }

  return (
    <div>
      <h3>Panel {props.type}</h3>
      <PanelButton
        handleClick={togglePanelDisplay}
        name={props.button}
        class="togglePanel"
      />
      {showPanel ? <Form resource={props.resource} type={props.type} /> : <></>}
    </div>
  )
}

export default Panel
