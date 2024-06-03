import { useNavigate, useParams } from 'react-router-dom';
// import { Rights } from '../../../src/App';
// import { useContext } from 'react';

function OptionButtons(){
    //  const { userRights, setUserRights } = useContext(Rights);
    const navigate = useNavigate();
    const {idFromPath} = useParams();
    // console.log(userRights);
    const handleButtonClick = (option) => {
        navigate(`/view/${option}/${idFromPath}`); 
      };
    return (
        <div className="optionButtons">
          <button onClick={() => handleButtonClick('info')}>Informations</button>
          <button  onClick={() => handleButtonClick('metering')}>Metering</button>
          <button onClick={() => handleButtonClick('failures')}>Failures</button>
          <button onClick={() => handleButtonClick('configuration')}>Configuration</button>
          <button onClick={() => handleButtonClick('status')}>Status</button>
        </div>
      );
    }
    

export default OptionButtons

// disabled={!userRights}