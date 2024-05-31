import { useNavigate, useParams } from 'react-router-dom';

function EditOptionButtons(){
    const navigate = useNavigate();
    const {idFromPath} = useParams();
    const handleButtonClick = (option) => {
        navigate(`/edit/${option}/${idFromPath}`); 
      };
    return (
        <div className="optionButtons">
          <button onClick={() => handleButtonClick('info')}>Informations</button>
          <button onClick={() => handleButtonClick('metering')}>Metering</button>
          <button onClick={() => handleButtonClick('failures')}>Failures</button>
          <button onClick={() => handleButtonClick('configuration')}>Configuration</button>
          <button onClick={() => handleButtonClick('status')}>Status</button>
        </div>
      );
    }
    

export default EditOptionButtons