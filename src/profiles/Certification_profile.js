import { private_safeAlpha } from "@mui/system";
import { DatePicker } from "antd";
import axios from "axios";
import { useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";

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
      "http://100.25.193.158:4000/employee/saveCertification",
      profile,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log(profile);
  };
  return (
    <>
      <Nav_Experts />
      <NavBar3 />
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
    </>
  );
};

export default Certification_profile;
