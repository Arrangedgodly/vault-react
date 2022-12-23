import vaultAlt from "../images/vault-alt.svg";
import calculatorAlt from "../images/calculator-alt.svg";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1 className="page__header">Vault Counter</h1>
            <div className="header__icons">
            <img
                src={vaultAlt}
                alt="vault icon"
                className="header__icon"
            />
            <img
                src={calculatorAlt}
                alt="calculator icon"
                className="header__icon"
            />
            </div>
            <div className="header__links">
              <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? 'header__link header__link-active' : 'header__link'}
              >
                Counter
              </NavLink>
              <NavLink 
                to='/counts' 
                className={({ isActive }) => isActive ? 'header__link header__link-active' : 'header__link'}
              >
                Previous Counts
              </NavLink>
            </div>
      </header>
    );
}

export default Header;