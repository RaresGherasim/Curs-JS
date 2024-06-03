import { useNavigate, useParams } from "react-router-dom";

function ManageFooter() {
    const navigate = useNavigate();
    const {idFromPath} = useParams();
    const handleButtonClick = (funct) => {
        navigate(`/users/${funct}/${idFromPath}`); 
    };
    return(
      <header>
      <div className="separator">s</div>
      <div className="footer">
      <div className="optionButtons">
        <div>
  
            <button onClick={() => handleButtonClick('view')}>View user</button>
            <button onClick={() => handleButtonClick('edit')}>Edit user</button>
            <button onClick={() => handleButtonClick('delete')}>Delete user</button>
        </div>
            <button onClick={() => handleButtonClick('newuser')}>New user</button>
            <button onClick={() => handleButtonClick('view')}>Manage devices</button>

          </div>
      </div>
  
    </header>
        )
}

export default ManageFooter;