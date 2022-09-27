import PageTitle from "./pageTitle/PageTitle"

const Nav = () => {
  const pages = [
    {
      title: "Rent",
      path: "/"
    },
    {
      title: "Clients",
      path: "/clients"
    },
    {
      title: "Vehicles",
      path: "/vehicles"
    }
  ]
  return (
    <>
      <h3>Nav</h3>
      <ul>
        {pages.map((page) => (
          <PageTitle key={page.title} text={page.title} path={page.path} />
        ))}
      </ul>
    </>
  )
}

export default Nav
