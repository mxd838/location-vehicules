import "./HeaderCell.scss"

const HeaderCell = (props: any) => {
  console.log(props)
  return <div className="headerCell">{props.name}</div>
}

export default HeaderCell
