import vaultAlt from "../images/vault-alt.svg";
import calculatorAlt from "../images/calculator-alt.svg";
import { Link } from 'react-router-dom';

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
              <Link to='/'>
                <p className="header__link">Counter</p>
              </Link>
              <Link to='/counts'>
                <p className="header__link">Previous Counts</p>
              </Link>
            </div>
      </header>
    );
}

export default Header;