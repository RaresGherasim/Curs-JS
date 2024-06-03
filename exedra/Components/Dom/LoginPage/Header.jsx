import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
    return(
  <header>
    <div className="header">
      <div className="headerBody">
        <a className="logoSchreder">
          <img
            className="imageLogo"
            src="https://hyperion.schreder-exedra.com/login/assets/logo.svg"
            alt="Home"
            />
        </a>
        <div className="spaceLogo"></div>
        <button id="logoutButton" onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
    <div className="separator">s</div>
  </header>
        )
}

export default Header;