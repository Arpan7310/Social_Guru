import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavBar2 from "./NavBar2";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Applied.css";
import axios from "axios";
import { useEffect } from "react";
import "./Application.css";
import Applicants_Modal from "./Applicants_Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Nav_Agencies from "./Nav_Agencies";

const Applications = () => {
  let val = localStorage.getItem("email_client");
  const [open, setOpen] = useState(false);

  const [element, setElement] = useState();

  function opening(arg) {
    setOpen(true);
    setElement(arg);
  }

  let fair_ = localStorage.getItem("ID_client");
  console.log("Also The client id", fair_);

  useEffect(() => {
    fetchApiData(fair_);
  }, []);

  const [users, setUsers] = useState([]);

  const fetchApiData = async (Id) => {
    try {
      const res = await fetch(
        `http://3.84.158.17:4000/client/postedJobs?id=${Id}`
      );
      console.log(res);
      let x = await res.json();
    
      setUsers(x);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(users);

  return (
    <div>
      <Nav_Agencies />
      <NavBar2 />
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <strong>Job Applications</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button
                variant="dark"
                style={{ color: "white" }}
                as={Link}
                to="/Posting"
              >
                Post Job
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {users.map((curElem, index) => {
        let inc = {
          open: curElem.openings,
          duration: curElem.duration,
          stipend: curElem.stipendtype,
        };
        let job = curElem.id;

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
            { (
              <div className="container-fluid p-5">
                <div className="row text-center">
                  <Container className="job-card mt-5 " id="read-more-wrap">
                    <Row>
                      <Col xs={4}>
                        <h3 variant="subtitle1">{curElem.jobprofile}</h3>
                        <h6 variant="subtitle1">
                          <b className="company-name">{inc.open} </b> Openings |{" "}
                          <b className="company-name">{curElem.duration}</b>{" "}
                          Months |{" "}
                          <b className="company-name">{curElem.stipendtype} </b>{" "}
                          Salary
                        </h6>
                      </Col>

                      <Col xs={4}>
                        {curElem.workfromhome === true ? (
                          <Button variant="success" className="mt-3">
                            Remote
                          </Button>
                        ) : (
                          <div>
                            {curElem.cities.map((el) => {
                              return (
                                <>
                                  <ListGroup className="mt-3" vertical>
                                    <ListGroup.Item>
                                      {" "}
                                      📍 {el.city}
                                    </ListGroup.Item>
                                  </ListGroup>
                                </>
                              );
                            })}
                          </div>
                        )}
                      </Col>

                      <Col xs={4}>
                        {curElem.skills.map((el) => {
                          return (
                            <>
                              <ListGroup className="mt-3" vertical>
                                <ListGroup.Item> ✅ {el.skill}</ListGroup.Item>
                              </ListGroup>
                            </>
                          );
                        })}
                      </Col>
                    </Row>

                    <Row className="p-2">
                      <Col xs={4}>
                        <b>Responsibilities</b> :- {curElem.responsibilities}
                      </Col>
                      <Col xs={4}></Col>
                      <Col xs={4}>
                        <Button variant="dark" onClick={() => opening(index)}>
                          See the Employee List
                        </Button>
                        {open && element === index && (
                          <Applicants_Modal
                            employeeid={fair_}
                            jobid={job}
                            open={open}
                            setOpen={setOpen}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col>
                        {curElem.stipendtype === "nominal" ? (
                          <p>
                            {" "}
                            Salary :- ₹ {curElem.stipendamountmin} to ₹{" "}
                            {curElem.stipendamountmax}
                          </p>
                        ) : (
                          <p> Salary:- ₹ {curElem.stipendamountmax} </p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <marquee>
                        The Application is Vallid till{" "}
                        <b class="blink">{date}</b> on{" "}
                        <b class="blink">{result[0]}</b>{" "}
                      </marquee>
                    </Row>
                  </Container>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Applications;
