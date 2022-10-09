import Form from "../../form/Form"

const Panel = (props: any) => {
  // TODO
  // conditional rendering
  // if props received == creation
  // --> call panelButton component
  // if not
  // --> toggle function on data row (see relevant component)

  return (
    <div>
      <h3>Panel {props.type}</h3>
      {props.showPanel ? (
        <Form resource={props.resource} type={props.type} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Panel
