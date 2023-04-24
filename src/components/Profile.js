import React from "react";
import NavBar3 from "./NavBar3";
import { useState } from "react";
import { Button, Modal, Form, Container } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import $ from "jquery";
import axios from "axios";
import Nav_Experts from "./Nav_Experts";
import { Row } from "antd";
import { Col } from "antd";
import { duration } from "@mui/material";
import { useEffect } from "react";
import SideNavbar from "./SideNavbar";

const Profile = (props) => {
  // const[userData,setUserData] = useState({"id":1,"firstname":"Rahul","lastname":"Gupta","email":"sonubhaiya9669@gmail.com","phonenumber":"7003481512","isVerified":false,"otp":"96262"});

  useEffect(() => {
    fetchData();
  }, []);
  let value = localStorage.getItem("email_Employee");
  const [userData, setUserData] = useState({
    id: "",

    email: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
  });
  const fetchData = () => {
    axios
      .get(`http://3.84.158.17:4000/employee/find/?email=${value}`)
      .then((response) => {
        let worker = response.data;

        setUserData(worker);

        localStorage.setItem("ID_employee", response.data.id);
      });
  };

  console.log(userData);

  const { email, password } = (props.location && props.location.state) || {};

  // Adding More Field Education

  const [inputList, setinputList] = useState([{ firstName: "", lastName: "" }]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { firstName: "", lastName: "" }]);
  };

  // Adding Multiple Field in Company
  const [companyset, setCompanyset] = useState([
    { Company: "", Duration: "", Profile: "" },
  ]);
  const handleinput = (e, index) => {
    const { name, value } = e.target;
    const list = [...companyset];
    list[index][name] = value;
    setCompanyset(list);
  };
  const handleout = (index) => {
    const list = [...companyset];
    list.splice(index, 1);
    setCompanyset(list);
  };
  const handleadd = () => {
    setCompanyset([...companyset, { Company: "", Duration: "", Profile: "" }]);
  };

  // console.log(Surname);

  // let lastName = userData.data.lastname;
  // let tel = userData.data.phonenumber;

  let access_token = localStorage.getItem("access_token");
  console.log(access_token);

  return access_token ? (
    <>
      <div>
        <Nav_Experts />
        {/* <NavBar3 /> */}
        <section className="main-page">
          <SideNavbar />
          <div className="main-form-page">
            <h1 className="text-center">Make Your Profile</h1>
            <div className="container">
              <div className="small-box dark-box mx-auto text-center">
                🚨 Keep Your Profile Updated 🚨
              </div>
            </div>

            <div className="container  d-flex justify-content-center">
              <Form>
                <div className="row">
                  <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                      <img
                        class="rounded-circle mt-5"
                        style={{ width: "150px" }}
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      />
                      <span class="font-weight-bold">
                        {userData.firstname} {userData.lastname}
                      </span>
                      <span class="text-black-50">{userData.email} </span>
                      <span> </span>
                    </div>
                  </div>
                  <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile Settings</h4>
                      </div>

                      <div class="row mt-3">
                        <div class="col-md-6">
                          <label class="labels">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            name="city"
                            value={userData.firstname}
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="labels">Surname</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Surname"
                            name="state"
                            value={userData.lastname}
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Mobile Number</label>
                          <input
                            type="text"
                            class="form-control"
                            name="addressLine"
                            value={userData.phonenumber}
                          />
                        </div>

                        <div class="col-md-12">
                          <label class="labels">Location</label>
                          <input
                            type="text"
                            class="form-control"
                            name="addressLine"
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Your Resume</label>
                          <input
                            type="file"
                            class="form-control"
                            name="addressLine1"
                          />
                        </div>
                      </div>

                      {/* <div class="mt-5 text-center">
                        <button
                          class="btn btn-dark profile-button"
                          type="button"
                        >
                          Save Profile
                        </button>
                      </div> */}
                    </div>
                  </div>

                  {/* <div class="col-md-4">
                    <div class="p-3 py-5">
                      <div class="d-flex justify-content-between align-items-center experience">
                        <span>Edit Experience</span>
                        <span class="border px-3 p-1 add-experience">
                          <i class="fa fa-plus"></i>&nbsp;Experience
                        </span>
                      </div>
                      <br />

                      {companyset.map((x, i) => {
                        return (
                          <div className="row mb-3">
                            <div class="form-group col-md-4">
                              <label>Company</label>
                              <input
                                type="text"
                                name="Company"
                                class="form-control"
                                placeholder="College Name"
                                onChange={(e) => handleinput(e, i)}
                              />
                            </div>
                            <div class="form-group col-md-4">
                              <label>Profile</label>
                              <input
                                type="text"
                                name="Profile"
                                class="form-control"
                                placeholder="Duration"
                                onChange={(e) => handleinput(e, i)}
                              />
                            </div>
                            <div class="form-group col-md-2">
                              <label>Duration</label>
                              <input
                                type="text"
                                name="Duration"
                                class="form-control"
                                placeholder="Duration"
                                onChange={(e) => handleinput(e, i)}
                              />
                            </div>

                            <div class="form-group col-md-2 mt-4">
                              {companyset.length !== 1 && (
                                <button
                                  className="btn btn-danger mx-1"
                                  onClick={() => handleout(i)}
                                >
                                  X
                                </button>
                              )}
                              {companyset.length - 1 === i && (
                                <button
                                  className="btn btn-dark"
                                  onClick={handleadd}
                                >
                                  +
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div class="d-flex justify-content-between align-items-center experience">
                      <span>Edit Academics</span>
                      <span class="border px-3 p-1 add-experience">
                        <i class="fa fa-plus"></i>&nbsp;Academics
                      </span>
                    </div>
                    <br />
                    {inputList.map((x, i) => {
                      return (
                        <div className="row mb-3">
                          <div class="form-group col-md-5">
                            <label>College</label>
                            <input
                              type="text"
                              name="firstName"
                              class="form-control"
                              placeholder="College Name"
                              onChange={(e) => handleinputchange(e, i)}
                            />
                          </div>
                          <div class="form-group col-md-5">
                            <label>Duration</label>
                            <input
                              type="text"
                              name="lastName"
                              class="form-control"
                              placeholder="Duration"
                              onChange={(e) => handleinputchange(e, i)}
                            />
                          </div>

                          <div class="form-group col-md-2 mt-4">
                            {inputList.length !== 1 && (
                              <button
                                className="btn btn-danger mx-1"
                                onClick={() => handleremove(i)}
                              >
                                X
                              </button>
                            )}
                            {inputList.length - 1 === i && (
                              <button
                                className="btn btn-dark"
                                onClick={handleaddclick}
                              >
                                +
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div> */}
                </div>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Profile;
