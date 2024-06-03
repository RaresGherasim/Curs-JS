// import { useEffect, useState } from "react";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../src/App";


export default function DeleteUser() {
  const { idFromPath } = useParams();
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState();

  // let key = "AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys";

  async function deleteUser(userID) {

    const response = await fetch(`http://localhost:3000/devicesSim/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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






    //   await fetch(`http://localhost:3000/devicesSim/${deviceID}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   alert(`Device with ID : ${deviceID} was deleted`);
    //   console.log();
    //   navigate("/firstPage/");
    // } 
  

  // useEffect(() => {
  //   getSimDevice(idFromPath).then((dev) => setDevice(dev));
  // }, [idFromPath]);

  return (
    <div className="deleteDevicePage">
      <form onSubmit={deleteUser}>
        <div className="device__id">
          <br />
          <label htmlFor="deviceId">
            Are you sure you want to delete the user with the email:
          </label>
          <br />
          <span name="userId"> {idFromPath} </span>
          <br />
        </div>

        <br />
        <br />
        <br />
        <button onClick={() => deleteUser(idFromPath)}>Delete device</button>
        <br />
      </form>
    </div>
  );
}