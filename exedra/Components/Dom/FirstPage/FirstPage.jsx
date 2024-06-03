import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
import getAllSimDevices from "../../GetFromDb/GetAllSimDevices.jsx";
import { useEffect } from "react";

function FirstPage() {
  const navigate = useNavigate();

  useEffect(() => {
    getAllSimDevices().then((devices) => {
      navigate(`/view/info/${devices[0].id}`);
    });
  }, []);

  return <div></div>;
}

export default FirstPage;
