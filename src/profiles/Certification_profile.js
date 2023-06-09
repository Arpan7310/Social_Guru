import { private_safeAlpha } from "@mui/system";
import { DatePicker } from "antd";
import axios from "axios";
import { useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";
import SideNavbar from "../components/SideNavbar";

let Certification_profile = () => {
  let [profile, setProfile] = useState({
    institute: "",
    grade: "",
  });
  let employeeId = localStorage.getItem("ID_employee");
  let access_token = localStorage.getItem("access_token");

  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());

  let handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    profile.startDate = startDate;
    profile.endDate = endDate;
    profile.grade = Number(profile.grade);
    axios.post(
      "http://3.84.158.17:4000/employee/saveCertification",
      profile,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log(profile);
    alert("Certification Profile saved successfully")
  };
  return (
    <>
      <Nav_Experts />
      {/* <NavBar3 /> */}
      <section className="main-page">
      <SideNavbar />
      <div className="main-form-page">
      <h1 className="basic_profile_header">Complete Your Certification profile</h1>
      <form
        className="basic_profile_form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="basic_profile_field">
          <div>
            <label htmlFor="institute">institute: </label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            name="institute"
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="grade">grade: </label>
          </div>
          <input onChange={handleChange} name="grade" required type={"text"} />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="startDate">Start Date: </label>
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date.toISOString())}
            style={{width: '200px'}}
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="endDate">End date: </label>
          </div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date.toISOString())}
          />
        </div>
        <div><input type={"submit"} value={"submit"} /></div>
      </form>
      </div>
      </section>
    </>
  );
};

export default Certification_profile;
