import { useState } from "react";
import { DatePicker } from "antd";
import axios from "axios";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";
let Awards = () => {
  let [profile, setProfile] = useState({
    name: "",
    recognisedby: "",
    levelofaward: "",
    date: "",
  });
  let [date, setDate] = useState(new Date());
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
    profile.date = date;
    profile = {...profile, empId: Number(employeeId)}
    axios.post('http://100.25.193.158:4000/employee/saveEmployeeAwards', profile, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then(res=> {
        console.log(res);
    }).catch(err=> {
        console.log(err);
    })
    alert("Award Profile saved successfully")
  };
  return (
    <>
    <Nav_Experts/>
    <NavBar3 />
    <h1 className="basic_profile_header">Your Award profile</h1>
      <form
        className="basic_profile_form"
        method="POST"
        onSubmit={handleSubmit}
        style={{ marginTop: "5rem" }}
      >
        <div className="basic_profile_field">
          <div>
            <label htmlFor="name">Name: </label>
          </div>
          <input type={"text"} name="name" required onChange={handleChange} />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="recognisedby">recognised by: </label>
          </div>
          <input
            type={"text"}
            name="recognisedby"
            required
            onChange={handleChange}
          />
        </div>
        <div className="basic_profile_field">
            <div><label>Date: </label></div>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date.toISOString())}
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="levelofaward">level of award: </label>
          </div>
          <input
            type={"text"}
            name="levelofaward"
            required
            onChange={handleChange}
          />
        </div>
        <div style={{gridColumn: '1 / span 2'}}><input type={"submit"} value="submit" /></div>
      </form>
    </>
  );
};

export default Awards;
