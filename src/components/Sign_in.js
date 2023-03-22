import React, { useState, useRef } from "react";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

const Sign_in = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const email = useRef();
  const password = useRef();
  let history = useHistory();
  const loginHandler = (event) => {
    event.preventDefault();
    setState(event.target.email.value);

    const email = event.target.email.value;
    const password = event.target.password.value;
    const field = { email, password };

    console.log(field);

    axios
      .post("http://100.25.193.158:4000/auth/login", field)
      .then((response) => {
        console.log(response);
        // event.target.reset();
        window.alert("Welcome to Social gurus");
        props.history.push("/Profile", state);
        console.log(response.data.access_token);
        localStorage.setItem("email_Employee", email);
        localStorage.setItem("password_Employee", password);
        localStorage.setItem("access_token", response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
        window.alert("Something went wrong");
      });
  };

  return (
    <div>
      <Nav />
      <NavBar />

      <div className="container  mt-5">
        <div class="login">
          <div class="form">
            <h2>Experts</h2>
            <Form onSubmit={loginHandler}>
              <input
                type="text"
                placeholder="Username"
                name="email"
                ref={email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref={password}
                onChange={handleInputChange}
              />
              <input type="submit" value="Sign In" class="submit" />
              <ul style={{ color: "white" }}>
                For Agencies{" "}
                <Link style={{ color: "white" }} as={Link} to="/Sign_in2">
                  <b> Click Here</b>
                </Link>
              </ul>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sign_in;
