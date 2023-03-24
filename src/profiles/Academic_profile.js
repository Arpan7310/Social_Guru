import { DatePicker } from "antd";
import axios from "axios";
import { useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";

let Academic_profile = () => {
    let [profile, setProfile] = useState({
        educationalQualification: '',
        course: '',
        specialisation: '',
        institute: '',
        percentage: ''
    })

    let [startDate, setStartDate] = useState(new Date())
    let [endDate, setEndDate] = useState(new Date())
    let handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }
    let employeeId = localStorage.getItem("ID_employee");
    let access_token = localStorage.getItem("access_token");
    let handleSubmit = (e) => {
        e.preventDefault()
        profile.percentage = Number(profile.percentage)
        profile['coursestart'] = startDate;
        profile['courseend'] = endDate
        console.log(profile);
        profile = {...profile, employeeId: Number(employeeId)}
        axios.post('http://100.25.193.158:4000/employee/saveAcademicProfile', profile, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
        alert("Academic Profile saved succesfully")
        console.log(profile);
    }
  return (
    <>
      <Nav_Experts />
      <NavBar3 />
      <h1 className="basic_profile_header">Complete Your Academic profile</h1>
      <form
        className="basic_profile_form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="basic_profile_field">
          <div>
            <label htmlFor="educationalQualification">Educational Qualification: </label>
          </div>
          <input
            type={"text"}
            name="educationalQualification"
            onChange={handleChange}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="course">Course:</label>
          </div>
          <input type={"text"} name="course" required onChange={handleChange} />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="specialisation">specialisation: </label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            required
            name="specialisation"
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="institute">institute: </label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            required
            name="institute"
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="coursestart">coursestart: </label>
          </div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date.toISOString())} />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="courseend">courseend: </label>
          </div>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date.toISOString())} />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="percentage">percentage: </label>
          </div>
          <input
            type={"number"}
            name="percentage"
            required
            onChange={handleChange}
          />
        </div>
        <div className="submit"><input type={'submit'} value='submit' style={{padding: '0.8rem 1.8rem'}} /></div>
      </form>
    </>
  );
};

export default Academic_profile;
