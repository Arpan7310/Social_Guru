import axios from "axios";
import { useEffect, useRef, useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";
import "./basic_profile.css";

let Basic_profile = () => {
  let access_token = localStorage.getItem("access_token");
  let employeeId = localStorage.getItem("ID_employee");
  let [profile, setProfile] = useState({
    date: "",
    gender: "",
    disablity: false,
    languageproficiency: "",
    languageproficiencyLevel: "",
    address: "",
    maritalStatus: "",
    linkedIn: "",
    pan: "",
    gst: "",
    idproof: "",
  });

  let handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "true" || e.target.value == "false") {
      let boolval = e.target.value === "true" ? true : false;
      console.log(typeof(boolval));
      setProfile({
        ...profile,
        [e.target.name]: boolval
      })
      console.log("boolean called");
    }
    else {
      setProfile((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        
      }));
      console.log("boolean not called");
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    profile = { ...profile, empId: employeeId };
    console.log(profile);
    axios
      .post(`http://52.3.252.238:4000/employee/saveProfile`, profile, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error occured: " + err);
      });
  };

  return (
    <>
      <Nav_Experts />
      <NavBar3 />
      <h1 className="basic_profile_header">Complete Your profile</h1>
      <form
        className="basic_profile_form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="basic_profile_field">
          <div>
            <label htmlFor="Date">Date: </label>
          </div>
          <input
            type={"date"}
            value={profile.date}
            name="date"
            onChange={handleChange}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="gender">Gender</label>
          </div>
          <select
            onChange={handleChange}
            name="gender"
            value={profile.gender}
            required
          >
            <option value={""} disabled>
              Choose Gender
            </option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"Prefer not to close"}>Prefer not to close</option>
          </select>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="disablity">Disablity</label>
          </div>
          <select
            onChange={handleChange}
            name="disablity"
            value={profile.disablity}
            required
          >
            <option value={''}>
              Choose
            </option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="languageproficiency">Language proficiency</label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            name="languageproficiency"
            value={profile.languageproficiency}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="languageproficiencyLevel">
              Language proficiency Level
            </label>
          </div>

          <select
            onChange={handleChange}
            name="languageproficiencyLevel"
            value={profile.languageproficiencyLevel}
            required
          >
            <option value='' disabled selected>
              Choose Level
            </option>
            <option value={"beginner"}>Beginner</option>
            <option value={"intermediate"}>Intermediate</option>
            <option value={"advance"}>Advance</option>
          </select>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <input
            type={"text"}
            name="address"
            value={profile.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="marital status">marital status</label>
          </div>
          <select
            value={profile.maritalStatus}
            onChange={handleChange}
            name="maritalStatus"
            required
          >
            <option value='' disabled selected>
              Choose marital status
            </option>
            <option value={"married"}>Married</option>
            <option value={"unmarried"}>Unmarried</option>
          </select>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="linkedIn">LinkedIn Link</label>
          </div>
          <input
            type={"text"}
            name="linkedIn"
            value={profile.linkedIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="pan">Pan No.</label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            value={profile.pan}
            name="pan"
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="gst">GST No.</label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            value={profile.gst}
            name="gst"
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="idproof">Id Proof</label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            name="idproof"
            value={profile.idproof}
            required
          />
        </div>
        <input type={"submit"} value={"submit"} />
      </form>
    </>
  );
};
export default Basic_profile;
