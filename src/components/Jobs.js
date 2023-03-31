import React from "react";
import NavBar3 from "./NavBar3";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Yourjob from "./Yourjob";
import Navbar from "react-bootstrap/Navbar";
import Nav_Experts from "./Nav_Experts";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import "./You.css";

const Jobs = () => {
  let API = "http://52.3.252.238:4000/jobs/findAll";

  const [users, setUsers] = useState([]);
  let city_name = [];
  const fetchApiData = async (url) => {
    try{
            const res = await fetch(url);
            setUsers(await res.json());
            

            
        } 
        catch(error){
            console.log(error);
  
        }
    /* try {
      let res = await fetch(url);
      let json = await res.json();
      setUsers(json);
      console.log(json);
    } catch (err) {
      console.log("error" + err);
    } */
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const [open, setOpen] = useState();
  const [element, setElement] = useState();

  function opening(arg) {
    setOpen(true);
    setElement(arg);
  }

  return (
    <>
      <Nav_Experts />
      <NavBar3 />

      <Navbar>
        <Container>
          <Navbar.Brand href="#home">List of Opportunities</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="dark" as={Link} to="/Applied">
              My Applied Opportunities
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="filter">
        <div class="container">
          <form class="mt-3 ">
            <Row variant="light">
              <Col xs={4}>
                <select class="form-control select2">
                  <option>Remote</option>
                  <option>Inoffice</option>
                </select>
              </Col>
              <Col xs={4}>
                <select class="form-control select2">
                  <option>Full time</option>
                  <option>Parttime</option>
                </select>
              </Col>

              <Col xs={4}>
                <Row>
                  <Button variant="dark">Search</Button>
                </Row>
              </Col>
            </Row>
          </form>
        </div>
      </div>
      <div className="container-fluid mt-2 p-5">
        <div className="row text-center">
          {users.map((curElem, index) => {
            for (let i in curElem.cities) {
              let x = curElem.cities[i].city;

              city_name.push(x);
            }

            let Company_name = curElem.client.organizationname;
            let job_profile = curElem.jobprofile;
            let jobid = curElem.id;
            let Responsible = curElem.responsibilities;
            let slots = curElem.openings;

            var endDate = curElem.endDate;

            let date = endDate.substring(0, 10);
            console.log(date);

            let currentDate = new Date().toJSON().slice(0, 10);
            console.log(currentDate);

            let isoDate = endDate;
            let result = isoDate.match(/\d\d:\d\d/);
            console.log(result);

            const collection = { Company_name, jobid };

            return (
              <>
                {currentDate < date ? (
                  <></>
                ) : (
                  <Container className="job-card mt-5">
                    <Row>
                      <Col xs={4} md={4}>
                        <h2>{job_profile} </h2>
                        <h3>{Company_name}</h3>
                      </Col>
                      <Col xs={4} md={4}>
                        Mode / Location :- <br />
                        {curElem.workfromhome === true ? (
                          <Button variant="success" className="mt-3" disabled>
                            Remote
                          </Button>
                        ) : (
                          curElem.cities.map((el) => {
                            return (
                              <>
                                <ListGroup className="mt-3" vertical>
                                  <ListGroup.Item> 📍 {el.city}</ListGroup.Item>
                                </ListGroup>
                              </>
                            );
                          })
                        )}
                      </Col>
                      <Col xs={6} md={4}>
                        Skills Required
                        {curElem.skills.map((el) => {
                          return (
                            <>
                              <ListGroup className="mt-3" vertical>
                                <ListGroup.Item> ✅ {el.skill}</ListGroup.Item>
                              </ListGroup>
                            </>
                          );
                        })}
                        {/* <Yourjob open={() => setViewJob(curElem)}/> */}
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col xs={4} md={4}>
                        Duration :- {curElem.duration} Months
                      </Col>
                      <Col xs={4} md={4}>
                        {curElem.stipendtype === "fixed" ? (
                          <p>Stipend :- ₹ {curElem.stipendamountmax} / Month</p>
                        ) : (
                          <p>
                            Stipend :- ₹ {curElem.stipendamountmax} / Month
                            (Performance Based)
                          </p>
                        )}
                      </Col>
                      <Col xs={4} md={4}>
                        <Button
                          variant="outline-dark"
                          onClick={() => opening(index)}
                        >
                          Apply
                        </Button>
                        {open && element === index && (
                          <Yourjob
                            job_id={jobid}
                            Company={Company_name}
                            Profile={job_profile}
                            open={open}
                            setOpen={setOpen}
                            Responsible={Responsible}
                            Slots={slots}
                          />
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <marquee>
                        The application is Vallid till{" "}
                        <b className="blink">{date} </b> on{" "}
                        <b className="blink">{result[0]}</b>{" "}
                      </marquee>
                    </Row>
                  </Container>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Jobs;
