import CreateForm from "../../createForm/CreateForm"

const Panel = (props: any) => {
  // TODO
  // -- handleClick on the button
  // -- change state of display to show the create form panel
  return (
    <div>
      <h3>Panel {props.type}</h3>
      <button className="togglePanel">{props.button}</button>
      <CreateForm type={props.type} />
    </div>
  )
}

export default Panel
