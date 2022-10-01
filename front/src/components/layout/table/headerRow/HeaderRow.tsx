import HeaderCell from "../headerCell/HeaderCell"
import "./HeaderRow.scss"

const HeaderRow = (props: any) => {
  return (
    <>
      <div className="headerRow">
        {props.name}
        {props.columnNames.map((columnName: any, index: string) => (
          <HeaderCell key={columnName} name={columnName} />
        ))}
      </div>
    </>
  )
}

export default HeaderRow
