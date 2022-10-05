const PanelButton = (props: any) => {
  return (
    <button onClick={props.handleClick} className={props.class}>
      {props.name}
    </button>
  )
}

export default PanelButton
