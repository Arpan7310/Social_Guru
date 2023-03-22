import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavBar3 from "./NavBar3";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Applied.css";
import { useEffect } from "react";
import { useState } from "react";
import Cong from "./Cong";

import Nav_Experts from "./Nav_Experts";
// http://localhost:4000/employee/findAppliedJobs/

const Applied = () => {
  // For Employee id

  let employeeid = localStorage.getItem("ID_employee");
  console.log("The value of employee is", employeeid);

  useEffect(() => {
    fetchApiData(employeeid);
  }, []);

  const [users, setUsers] = useState([]);

  const fetchApiData = async (Id) => {
    try {
      // http://100.25.193.158:4000/employee/findAppliedJobs/?employeeId=2
      const res = await fetch(
        `http://100.25.193.158:4000/employee/findAppliedJobs/?employeeId=${Id}`
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
      <Nav_Experts />
      <NavBar3 />
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <strong>Applied Jobs</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button
                variant="dark"
                style={{ color: "white" }}
                as={Link}
                to="/Jobs"
              >
                Apply More
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {users.map((curElem) => {
        console.log(curElem.hired);
        let client_ = curElem.clientId;

        console.log("The value of client is ", client_);
        var endDate = curElem.endDate;

        let date = endDate.substring(0, 10);
        console.log(date);

        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);

        let isoDate = endDate;
        let result = isoDate.match(/\d\d:\d\d/);
        console.log(result);
        return (
          <>
            <Container className="job-card mt-5">
              <Row>
                <Col xs={5}>
                  <h3 variant="subtitle1">{curElem.jobprofile}</h3>
                  <b>Stipend :-</b>{" "}
                  <h2 variant="subtitle1" className="company-name">
                    {" "}
                    ₹ {curElem.stipendamountmax}{" "}
                  </h2>
                </Col>
                <Col xs={5}>
                  <Link
                    variant="light"
                    className="btn btn-info"
                    to={`/Connect_Emp/${client_}`}
                  >
                    Chat
                  </Link>
                </Col>
                <Col xs={2}>
                  {curElem.hired === 0 ? (
                    <Button className="mt-3" variant="warning" disabled>
                      {" "}
                      In Process{" "}
                    </Button>
                  ) : (
                    <Cong />
                  )}
                </Col>
              </Row>

              <Row>
                <Col xs={5}>
                  <b>Stipend type</b> :- {curElem.stipendtype}
                </Col>
                <Col xs={5}>
                  <b>Number of Opening</b> :- {curElem.openings}
                </Col>
                <Col xs={2}>
                  <b>Duration</b> :- {curElem.duration} Months
                </Col>
              </Row>
              <Row className="p-2">
                Responsibillities :- {curElem.responsibilities}
                {/* <Button className="mt-3 justify-content-end" variant="outline-dark" onClick={applied}  >
          Check

</Button> */}
              </Row>
              <Row>
                {currentDate > date ? (
                  <marquee className="blink">
                    The Application is Expired
                  </marquee>
                ) : (
                  <marquee>
                    The Application is Vallid <b class="blink">{date}</b> on{" "}
                    <b class="blink">{result[0]}</b>{" "}
                  </marquee>
                )}
              </Row>
            </Container>
          </>
        );
      })}
    </div>
  );
};

export default Applied;
