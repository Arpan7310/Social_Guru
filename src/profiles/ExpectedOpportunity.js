import axios from "axios";
import { useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";
import SideNavbar from "../components/SideNavbar";

let ExpectedOpportunity = () => {
  let [profile, setProfile] = useState({
    hours: "",
    days: "",
    months: "",
    desiredtype: "",
    traveltype: "",
    expectation: "",
    location: "",
    natureofassigment: "",
  });
  let employeeId = localStorage.getItem("ID_employee");
  let access_token = localStorage.getItem("access_token");
  let handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    profile.hours = Number(profile.hours);
    profile.days = Number(profile.days);
    profile.months = Number(profile.months);
    profile.expectation = Number(profile.expectation);
    profile = { ...profile, empId: Number(employeeId) };
    axios
      .post(
        "http://3.84.158.17:4000/employee/saveExpectedOpportunity",
        profile,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(profile);
    alert("Data saved Successfully");
  };

  return (
    <>
      <Nav_Experts />
      {/* <NavBar3 /> */}
      <section className="main-page">
        <SideNavbar />
        <div className="main-form-page">
          <h1 className="basic_profile_header">Complete Your profile</h1>
          <form
            className="basic_profile_form"
            method="POST"
            onSubmit={handleSubmit}
            style={{ marginTop: "5rem" }}
          >
            <div className="basic_profile_field">
              <div>
                <label htmlFor="hours">Hours: </label>
              </div>
              <input
                type={"number"}
                name="hours"
                onChange={handleChange}
                required
              />
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="days">days: </label>
              </div>
              <input
                type={"number"}
                name="days"
                onChange={handleChange}
                required
              />
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="months">months: </label>
              </div>
              <input
                type={"number"}
                name="months"
                onChange={handleChange}
                required
              />
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="desiredtype">Desire Type: </label>
              </div>
              <select name="desiredtype" onChange={handleChange} required>
                <option value={""}>Choose option</option>
                <option value={"desk"}>Desk</option>
                <option value={"field"}>field</option>
                <option value={"desk + feild"}>Desk + feild</option>
              </select>
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="traveltype">travel Type: </label>
              </div>
              <select name="traveltype" onChange={handleChange} required>
                <option value={""}>Choose option</option>
                <option value={"occasional"}>occasional</option>
                <option value={"not at all"}>not at all</option>
              </select>
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="expectation">Expectation</label>
              </div>
              <input
                type={"number"}
                name="expectation"
                onChange={handleChange}
                required
              />
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="natureofassigment">Assignment Type: </label>
              </div>
              <select name="natureofassigment" onChange={handleChange} required>
                <option value={""}>Choose option</option>
                <option value={"alone"}>alone</option>
                <option value={"team"}>team</option>
                <option value={"clientEngagement"}>clientEngagement</option>
              </select>
            </div>
            <div className="basic_profile_field">
              <div>
                <label htmlFor="location">Location: </label>
              </div>
              <input
                type={"text"}
                onChange={handleChange}
                name="location"
                required
              />
            </div>
            <input type={"submit"} value="submit" />
          </form>
        </div>
      </section>
    </>
  );
};
export default ExpectedOpportunity;
