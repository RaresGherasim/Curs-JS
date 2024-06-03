import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/App";

function LogInComp() {

  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState();

  async function login(event) {
    event.preventDefault();
    setError(null);

    const formElement = event.target;
    const { email, password } = formElement;

    const user = {
      email: email.value,
      password: password.value,
    };

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();

    if (response.status === 400) {
      setError(body);
      return;
    }

    if (response.ok) {
      localStorage.setItem("accessToken", body.accessToken);
      setAuth(body.accessToken);
      navigate("/firstPage/");
    }
  }

  return (

    <form onSubmit={login}>
    {error ? <p className='error'>{error}</p> : ""}

    <section className="mainLogo">
      <br />
      <br />
      <div className="loginBox">
        <div className="signInLogo">
          <a className="signInPic" href="/">
            <img
              src="https://ro-ab-abrud.schreder-exedra.com/login/assets/exedra-small.png"
              alt="Exedra"
            />
          </a>
        </div>
        <div>Easy Mode</div>
      </div>

      <div className="signInSpace">
        <div className="signInTitle">Sign In</div>
        <div className="signInEmail">
          <input
            id="email"
            name="email"
            type="email"
            required=""
            className="signInEmailField"
            placeholder="Email address"
            data-placeholder="Email address"
            aria-required="true"
          />
        </div>
        <div className="signInTitle"></div>
        <div className="signInEmail">
          <input
            id="password"
            name="password"
            type="password"
            required=""
            className="signInEmailField"
            placeholder="Password"
            data-placeholder="Password"
            aria-required="true"
          />
        </div>
        <br />
        <div className="signInButtonZone">
          <button type="submit" color="accent" className="signInButton">
            <span> Sign in </span>
            <span></span>
            <span></span>
          </button>
        </div>
        <br />
        <br />
        <div className="signInFooter">
          <div>For SCHREDER SA</div>
          <div>by Gherasim Rares</div>
        </div>
      </div>
      <br />
      <br />
      <div className="separator">s</div>
    </section>
    </form>
  );
}

export default LogInComp;
