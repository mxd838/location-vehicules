import Form from "../../form/Form"

const Panel = (props: any) => {
  return (
    <div>
      {props.showPanel ? (
        <Form resource={props.resource} type={props.type} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Panel
