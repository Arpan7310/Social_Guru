import React from "react";
import NavBar2 from "./NavBar2";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import Nav_Agencies from "./Nav_Agencies";
const Profile_com = () => {
  let value = localStorage.getItem("email_client");
  useEffect(() => {
    fetchData();
  }, []);

  const [userData, setUserData] = useState({
    id: "",
    organizationname: "",
    sector: "",
    email: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
  });

  const fetchData = () => {
    axios
      .get(`http://52.3.252.238:4000/client/find/?email=${value}`)
      .then((response) => {
        let worker = response.data;
        localStorage.setItem("ID_client", response.data.id);

        setUserData(worker);
      });
  };

  return (
    <div>
      <Nav_Agencies />
      <NavBar2 />

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
                  {userData.organizationname}{" "}
                </span>
                <span class="text-black-50">{userData.email}</span>
                <span> </span>
              </div>
            </div>
            <div class="col-md-7 border-right">
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
                      value={userData.firstname}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Surname</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Surname"
                      value={userData.lastname}
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="num"
                    class="form-control"
                    value={userData.phonenumber}
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Sector</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userData.sector}
                  />
                </div>

                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mention About Company</label>
                    <textarea class="form-control" />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Company Number</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Location</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Company Licence</label>
                    <input
                      type="file"
                      class="form-control"
                      name="addressLine1"
                    />
                  </div>
                </div>

                <div class="mt-5 text-center">
                  <button class="btn btn-dark profile-button" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile_com;
