import { useNavigate, useParams } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const {idFromPath} = useParams();
    const handleButtonClick = (funct) => {
        navigate(`/${funct}/info/${idFromPath}`); 
    };
    return(
  <header>
    <div className="separator">s</div>
    <div className="footer">
    <div className="optionButtons">
          <button onClick={() => handleButtonClick('view')}>View device</button>
          <button onClick={() => handleButtonClick('edit')}>Edit device</button>
          <button onClick={() => handleButtonClick('new')}>New device</button>
        </div>
    </div>

  </header>
        )
}

export default Footer;