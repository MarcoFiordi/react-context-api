import { NavLink } from "react-router";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";
function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);
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
                        <NavLink className='nav-link' to="/prodotti">Prodotti</NavLink>
                    </li>
                </ul>

                <button
                    className="btn btn-outline-light ms-lg-3"
                    onClick={() => setBudgetMode(!budgetMode)}
                >
                    {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                </button>
            </div>

        </nav>
    )
}
export default Navbar;