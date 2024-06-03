import { useNavigate, useParams } from "react-router-dom";

function EditFooter() {
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
        <div>
  
            <button onClick={() => handleButtonClick('view')}>View device</button>
            <button onClick={() => handleButtonClick('edit')}>Edit device</button>
            <button onClick={() => handleButtonClick('delete')}>Delete device</button>
        </div>
            <button onClick={() => handleButtonClick('new')}>New device</button>
            <button onClick={() => handleButtonClick('manageUsers')}>Manage users</button>

          </div>
      </div>
  
    </header>
        )
}

export default EditFooter;