import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/">Homepage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/contacts">Chi siamo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  className='nav-link' to="/prodotti">Prodotti</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar;