import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LogoutBtn() {
  let { setUserLogin } = useContext(UserContext);
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("userToken");

    setUserLogin(null);

    navigate("/login");
  }

  return (
    <Button variant="danger" className="ms-5" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutBtn;
