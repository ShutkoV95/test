import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="container">
        <nav>
            <NavLink to="/pay_system/">Home</NavLink>
            <NavLink to="/pay_system/cards">Cards</NavLink>
            <NavLink to="/pay_system/contrAgents">Contr Agents</NavLink>
            <NavLink to="/pay_system/history">History</NavLink>
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout