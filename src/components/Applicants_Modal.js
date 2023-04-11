import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Profile_com from "./Profile_com";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useEffect } from "react";
import Table from "react-bootstrap/Table";
const Applicants_Modal = (props) => {
  // http://localhost:4000/jobs/findEmployees?jobId=3
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.data);

  const gothired = (id) => {
    let jobId = props.jobid;
    let employeeId = id;

    const data = { employeeId, jobId };
    console.log(data);
    axios
      .post("http://3.84.158.17:4000/jobs/hire", data)
      .then((response) => {
        console.log(response);
        window.alert("Hired");
        props.setopen(false);
      })
      .catch((error) => {
       window.alert(JSON.stringify(error?.response?.data?.message));
      });
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const res = await fetch(
        `http://3.84.158.17:4000/jobs/findEmployees?jobId=${props.jobid}`
      );
      console.log(res);
      let x = await res.json();
      setUsers(x);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        {/* <Button variant="dark" onClick={handleShow}>
       See the Employee List
      </Button> */}

        <Modal show={props.open} onHide={props.setOpen} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Applicants :-</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {users.length === 0 ? (
              <div>
                <p> No experts have yet applied for this Opportunities</p>
              </div>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>View</th>
                    <th>Connect</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {users.map((curElem) => {
                  let empid = curElem.employeeId;

                  return (
                    <>
                      <tbody>
                        <tr>
                          <td>
                            {curElem.firstname} {curElem.lastname}
                          </td>
                          <td>
                           
                          <Link
                              className="btn btn-primary"
                              to={`/ExpertsView/${empid}`}
                            >
                              Profile
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="btn btn-warning"
                              to={`/Connect/${empid}`}
                            >
                              Chat
                            </Link>
                          </td>
                          <td>
                            {curElem.hired === 0 ? (
                              <Button
                                variant="outline-success"
                                onClick={() => gothired(curElem.employeeId)}
                              >
                                {" "}
                                Hire
                              </Button>
                            ) : (
                              <Button variant="outline-danger" disabled>
                                Hired
                              </Button>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </Table>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.setOpen}>
              Close
            </Button>
            <Button variant="dark" onClick={props.setOpen}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Applicants_Modal;
