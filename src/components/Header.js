import vaultAlt from "../images/vault-alt.svg";
import calculatorAlt from "../images/calculator-alt.svg";

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
      </header>
    );
}

export default Header;