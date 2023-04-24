import "./sideNav.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
let SideNavbar = () => {
  let logOut = () => {
    let access_token = localStorage.getItem("access_token");
    console.log(access_token);
    window.location.href = "/";
    localStorage.removeItem("access_token");
  };
  return (
    <>
      {
        <div className="sideNav">
          <ul className="nav-list">
            <li className="list-item">
              <Nav.Link href="/Basic_profile">Basic profile</Nav.Link>
            </li>
            <li className="list-item">
              <Nav.Link href="/Special_profile">Special profile</Nav.Link>
            </li>
            <li className="list-item">
              <Nav.Link href="/Academic_profile">Academic profile</Nav.Link>
            </li>
            <li className="list-item">
              <Nav.Link href="/Certification_profile">
                Certification profile
              </Nav.Link>
            </li>
            <li className="list-item">
              <Nav.Link href="/Publication_profile">
                Publication Profile
              </Nav.Link>
            </li>
            <li className="list-item">
              <Nav.Link href="/EmployeeAwards">
                Employee Awards Profile
              </Nav.Link>
            </li>
            <li className="list-item">
              <Nav.Link href="/ExpectedOpportunity">
                Expected Opportunity
              </Nav.Link>
            </li>
            <li className="list-item">
              <NavDropdown title="Jobs" id="navbarScrollingDropdown">
                <NavDropdown.Item to="/Jobs" href="/jobs">
                  Apply
                </NavDropdown.Item>
                <NavDropdown.Item to="/Applied" href="/Applied">
                  Applied
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="list-item">
              <NavDropdown title="Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item to="/Profile" href="/Profile">
                  Edit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">View</NavDropdown.Item>
              </NavDropdown>
            </li>
            <Button variant="outline-dark" onClick={logOut}>
              Log-Out
            </Button>
          </ul>
        </div>
      }
    </>
  );
};

export default SideNavbar;
