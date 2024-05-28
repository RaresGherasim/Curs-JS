function LogInComp() {
  return (
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
            id="email"
            name="email"
            type="email"
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
  );
}

export default LogInComp;
