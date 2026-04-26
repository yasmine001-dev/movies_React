import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavbarEl() {
  const navLinkClassName = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  let { userLogin } = useContext(UserContext);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex align-items-center gap-4">
          <Container fluid className="text-warning text-left">
            <h2>AraCima</h2>
          </Container>
          {/* <Navbar.Brand href="#home">AraCima</Navbar.Brand> */}
          <Nav className="me-auto">
            {/* <Link to="home">Home</Link> */}
            <NavLink className={navLinkClassName} to="/home">
              Home
            </NavLink>
            <NavLink className={navLinkClassName} to="/movies">
              Movies
            </NavLink>
            <NavLink className={navLinkClassName} to="/form001">
              Form001
            </NavLink>
            <NavLink className={navLinkClassName} to="/form002">
              Form002
            </NavLink>
            <NavLink className={navLinkClassName} to="/day4">
              Day4
            </NavLink>
            <NavLink className={navLinkClassName} to="/aboutus">
              About
            </NavLink>
            <NavLink className={navLinkClassName} to="/actors">
              Actors
            </NavLink>
          </Nav>
          <div className="d-flex gap-5">
            {userLogin !== null ? (
              <LogoutBtn />
            ) : (
              <Link to="/login" className="text-decoration-none">
                <LoginBtn />
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarEl;
