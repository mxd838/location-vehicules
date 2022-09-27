import { Link } from "react-router-dom"

const PageTitle = ({ text, path }: any) => {
  return (
    <>
      <li>
        <Link to={path}>{text}</Link>
      </li>
    </>
  )
}

export default PageTitle
