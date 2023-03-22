import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import axios from "axios";

import Image from "react-bootstrap/Image";

import { useEffect } from "react";
import { Footer } from "antd/es/layout/layout";
function Yourjob(props) {
  console.log(props.Company_name);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let mail = localStorage.getItem("email_Employee");
  console.log(mail);
  // For Employee id

  const [store, setStore] = useState();
  useEffect(() => {
    axios
      .get(`http://100.25.193.158:4000/employee/find/?email=${mail}`)
      .then((response) => {
        console.log(response);
        setStore(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applyjob = (event) => {
    event.preventDefault();
    let jobId = props.job_id;
    let employeeId = store;
    const str = { jobId, employeeId };
    console.log(str);
    axios
      .post("http://100.25.193.158:4000/employee/apply", str)
      .then((response) => {
        console.log(response);
        window.alert("Applied Successfully");
        handleClose(false);
      })
      .catch((error) => {
        console.log(error);
        window.alert("Already Applied for this opportunity");
      });
  };

  return (
    <>
      <Modal show={props.open} onHide={props.setOpen} animation={false}>
        <Modal.Header style={{ backgroundColor: "#242424" }} closeButton>
          <Modal.Title>
            <h3 style={{ color: "white" }}>Apply for Opportunity</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <Image
                src="https://media.istockphoto.com/id/1128262881/vector/decorative-black-gift-box-with-golden-bow-isolated-on-white.jpg?s=170667a&w=0&k=20&c=stGcjUB-jv3Sbpa9o1h5LnyodwZJB3EhhjvA6lhp9Zk="
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={6}>
              <b>Oraganization</b> :- {props.Company}
              <br />
              <b>Job Profile</b> :- {props.Profile}
              <br />
              <b>Openings</b> :- {props.Slots}
              <br />
              <b>Responsibility</b> :- {props.Responsible}
            </Col>
          </Row>
          <Footer className="text-center mt-2">
            <b>Are you sure you want to Apply for this Opportunity</b>
          </Footer>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#242424" }}>
          <Button
            type="submit"
            onClick={applyjob}
            style={{ background: "#e1ad01", color: "#242424" }}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Yourjob;
