import React, { Profiler, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import NavBar2 from "./NavBar2";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./Posting.css";
import Footer from "./Footer.js";
import { Link, NavLink } from "react-router-dom";
import Overview from "./Overview";
import axios from "axios";
import Nav_Agencies from "./Nav_Agencies";
import { DatePicker } from "antd";

const Posting = () => {
  let [posting, setposting] = useState({
    jobprofile: "",
    worklocation: "",
    duration: "",
    total: "",
    jobdescription: "",
    cities: [],
    skills: [],
    compensation: "",
    startDate: "",
    endDate: "",
    travel: "",
    language: "",
    natureofwork: "",
    typeofwork: "",
    deadline: "",
    contactname: "",
    contactemail: "",
    contactNumber: "",
    education: [],
    role: "",
    experience: [],
    engagementtype: "",
    clientId: "",
    years: "",
  });

  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());
  let [deadline, setDeadline] = useState(new Date());

  let [experience, setExperience] = useState("");
  let [experienceList, setExperienceList] = useState([]);

  let handleAdd = () => {
    if (experience.length != 0) {
      if (!experienceList.includes(experience)) {
        setExperienceList([...experienceList, experience]);
      }
    }
  };

  let handleRemove = (index) => {
    let list = [...experienceList];
    list.splice(index, 1);
    console.log(list);
    setExperienceList(list);
  };

  let handleChange = (e) => {
    setposting({
      ...posting,
      [e.target.name]: e.target.value,
    });
    console.log(posting);
  };

  let [edu, setEdu] = useState();

  let onSelectEdu = (selectedList, selectedItem) => {
    console.log(selectedItem);
    let copy = { ...posting };
    copy.education.push(selectedItem);
    console.log(posting);
  };
  let onRemoveEdu = (selectedList, selectedItem) => {
    let copy = { ...posting };
    copy.education = copy.education.filter((el) => {
      if (el.id !== selectedItem.id) {
        return el;
      }
    });
    posting.education = copy.education;
    console.log(posting);
  };
  useEffect(() => {
    axios
      .get("http://3.84.158.17:4000/jobs/findQualifications")
      .then((res) => {
        console.log(res);
        setEdu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("useeffect");
  }, []);

  // Date Checker

  // For Constantly Updating the Skills
  function onSelectSkill(selectedList, selectedItem) {
    // let skill_value = selectedItem.skill;
    console.log(selectedList);
    let copy = { ...posting };
    copy.skills.push(selectedItem);
    console.log(posting);
  }

  let onRemoveSkill = (selectedList, selectedItem) => {
    let copy = { ...posting };
    copy.skills = copy.skills.filter((el) => {
      if (el.id !== selectedItem.id) {
        return el;
      }
    });
    posting.skills = copy.skills;
    console.log(posting);
  };

  // For Constantly Updating the cities
  function onSelectCity(selectedList, selectedItem) {
    let copy = { ...posting };
    copy.cities.push(selectedItem);
    console.log(posting);
  }
  let onRemoveCity = (selectedList, selectedItem) => {
    let copy = { ...posting };
    copy.cities = copy.cities.filter((el) => {
      if (el.id !== selectedItem.id) {
        return el;
      }
    });
    posting.cities = copy.cities;
    console.log(posting);
  };

  let clientId = localStorage.getItem("ID_client");
  let access_token = localStorage.getItem("token");

  let handleSubmit = (e) => {
    e.preventDefault();
    posting.startDate = startDate;
    posting.endDate = endDate;
    posting.deadline = deadline;
    posting.experience = experienceList;
    console.log(posting);
    posting = { ...posting, clientId: Number(clientId) };
    posting.total = Number(posting.total);
    posting.years = Number(posting.years);
    console.log("form submitted");
    axios
      .post("http://3.84.158.17:4000/jobs/save", posting)
      .then((response) => {
        console.log(response);
        window.alert("job Posted");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Unable to Post Job");
      });
  };
  const [knowloc, setKnowloc] = useState();

  let Roll_client = localStorage.getItem("ID_client");
  console.log("The ID for client is ", parseInt(Roll_client));

  /* const postjob = (event) => {
    event.preventDefault();
    const jobprofile = event.target.jobprofile.value;

    let workfromhome = knowloc === "True" ? true : false;
    console.log(workfromhome);
    const openings = parseInt(event.target.openings.value);
    const duration = parseInt(event.target.duration.value);
    const responsibilities = event.target.responsibilities.value;
    let cities = knowloc === "True" ? [] : city;
    console.log(cities);
    let skills = skill;
    console.log(skills);
    // const stipendtype = event.target.stipendtype.value;
    const stipendtype = knowloc === "fixed" ? "fixed" : "nominal";
    const stipendamountmax = parseInt(event.target.stipendamountmax.value);
    let stipendamountmin =
      knowloc === "fixed"
        ? stipendamountmax
        : parseInt(event.target.stipendamountmin.value);
    let clientId = parseInt(Roll_client);
    var startDateobj = new Date(event.target.startDate.value);
    let startDate = startDateobj.toISOString();
    var endDateobj = new Date(event.target.endDate.value);
    let endDate = endDateobj.toISOString();
    const database = {
      jobprofile,
      workfromhome,
      openings,
      duration,
      responsibilities,
      skills,
      cities,
      stipendtype,
      stipendamountmax,
      stipendamountmin,
      clientId,
      startDate,
      endDate,
    };

    console.log(database);
    axios
      .post("http://3.84.158.17:4000/jobs/save", database)
      .then((response) => {
        console.log(response);
        window.alert("job Posted");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Unable to Post Job");
      });
  }; */

  // const [options] = useState(data);

  // Setting City State Variable for Constantly Updating it
  const [city, setCity] = useState();

  const [cities_opt, setCities_opt] = useState();

  useEffect(() => {
    axios
      .get("http://3.84.158.17:4000/jobs/city/")
      .then((response) => {
        console.log(response);
        setCities_opt(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [skill_opt, setSkill_opt] = useState();

  useEffect(() => {
    axios
      .get("http://3.84.158.17:4000/jobs/skills/")
      .then((response) => {
        console.log(response);
        setSkill_opt(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [skill, setSkill] = useState();

  const [showhide, setShowhide] = useState();
  const handleshow = (event) => {
    const getshow = event.target.value;
    setShowhide(getshow);
  };

  const know_location = (event) => {
    setKnowloc(event.target.value);
  };

  const [opening, setOpening] = useState();
  const openmenu = (event) => {
    const openshow = event.target.value;
    setOpening(openshow);
  };
  return (
    <>
      <Nav_Agencies />
      <NavBar2 />

      <h1 class="text-center">Opportunities Posting</h1>
      <div class="container">
        <div className="small-box dark-box mx-auto text-center">
          🆕 Fill Up Complete Form Below 🆕
        </div>

        <div className="row" id="box">
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div>
                <label className="form-label" htmlFor="jobprofile">
                  Job Profile
                </label>
              </div>
              <input
                className="form-control"
                type={"text"}
                name="jobprofile"
                value={posting.jobprofile}
                onChange={handleChange}
              />
            </div>

            {/* Workfrom Home Radio Button */}

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="workfromhome"
                value="True"
                id="flexRadioDefault1"
                checked={knowloc === "True"}
                onClick={know_location}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Work From Home
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="false"
                id="flexRadioDefault1"
                onClick={know_location}
                checked={knowloc === "false"}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                In Office
              </label>
            </div>

            {knowloc === "false" && (
              <div class="mb-3">
                <label class="form-label">Select Cities</label>
                <Multiselect
                  options={cities_opt}
                  displayValue="city"
                  onSelect={onSelectCity}
                  onRemove={onRemoveCity}
                  name="cities"
                  required
                ></Multiselect>
              </div>
            )}

            <div class="mb-3">
              <label class="form-label">Total Opening</label>
              <input
                class="form-control"
                type="number"
                name="total"
                value={posting.total}
                required
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Duration</label>
              <input
                class="form-control"
                type="number"
                name="duration"
                required
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Mention Duration in Months Only
              </Form.Text>
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label" htmlFor="jobdescription">
                  Job Description
                </label>
              </div>
              <input
                type={"text"}
                name="jobdescription"
                value={posting.jobdescription}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label class="text-left">Experts Responsibility</label>
              <textarea
                class="form-control"
                name="responsibilities"
                rows="3"
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <div class="mb-3">
              <label class="form-label">Required Skillset</label>
              <Multiselect
                options={skill_opt}
                displayValue="skill"
                onSelect={onSelectSkill}
                onRemove={onRemoveSkill}
                required
              ></Multiselect>
            </div>

            <div className="mb-3">
              <label className="form-label">Experience</label>
              <input
                type={"text"}
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                name={"experience"}
                className="form-control"
              />
            </div>
            <div>
              {experienceList.map((el, index) => {
                return (
                  <>
                    <span>{el} </span>
                    <button
                      onClick={() => {
                        handleRemove(index);
                      }}
                    >
                      Remove
                    </button>
                  </>
                );
              })}
            </div>
            <button onClick={handleAdd}>Add</button>
            <div className="mb-3">
              <div>
                <label htmlFor="form-label">compensation</label>
              </div>
              <input
                type={"text"}
                name="compensation"
                value={posting.compensation}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            {/* <div className="mb-3">
              <div>
                <label htmlFor="form-label">client</label>
              </div>
              <input
                type={"text"}
                name="client"
                value={posting.client}
                className="form-control"
                onChange={handleChange}
              />
            </div> */}

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="stipendtype"
                value="fixed"
                checked={knowloc === "fixed"}
                onClick={know_location}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Fixed
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="nominal"
                onClick={know_location}
                checked={knowloc === "nominal"}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Nominal
              </label>
            </div>

            <div class="mb-3">
              <label class="form-label">Stipend</label>
              <input
                class="form-control"
                name="stipendamountmax"
                type="number"
                placeholder="₹ 10,000"
                required
                onChange={handleChange}
              />
            </div>

            {knowloc === "nominal" && (
              <div class="mb-3">
                <label class="form-label">Minimum Stipend</label>
                <input
                  class="form-control"
                  name="stipendamountmin"
                  type="number"
                  placeholder="₹ 8,000"
                  required
                  onChange={handleChange}
                />
              </div>
            )}

            <div class="mb-3">
              <label class="form-label">Application Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date.toISOString())}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Application End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date.toISOString())}
              />
            </div>

            <div className="mb-3">
              <div>
                <label htmlFor="contactemail" className="form-label">
                  Contact Email
                </label>
              </div>
              <input
                type={"email"}
                value={posting.contactemail}
                onChange={handleChange}
                name="contactemail"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                <label htmlFor="contactname" className="form-label">
                  Contact Name
                </label>
              </div>
              <input
                type={"text"}
                value={posting.conactname}
                onChange={handleChange}
                name="contactname"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                <label htmlFor="contactnumber" className="form-label">
                  Contact Number
                </label>
              </div>
              <input
                type={"number"}
                value={posting.contactNumber}
                onChange={handleChange}
                name="contactNumber"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Education</label>
              <Multiselect
                options={edu}
                displayValue="qualification"
                onSelect={onSelectEdu}
                onRemove={onRemoveEdu}
                required
              ></Multiselect>
            </div>

            <div className="mb-3">
              <div>
                <label htmlFor="travel" className="form-label">
                  Travel
                </label>
              </div>
              <select
                class="form-select"
                onChange={handleChange}
                value={posting.travel}
                name="travel"
              >
                <option selected value={""}>
                  Choose Option
                </option>
                <option value="more than 50%">More than 50%</option>
                <option value="less than 50%">Less than 50%</option>
                <option value="ocassional">Ocassional</option>
                <option value={"not at all"}>Not at all</option>
              </select>
            </div>

            <div className="mb-3">
              <div>
                <label htmlFor="language" className="form-label">
                  Language
                </label>
              </div>
              <input
                type={"text"}
                onChange={handleChange}
                value={posting.language}
                className="form-control"
                name="language"
              />
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label" htmlFor="natureofwork">
                  Nature Of Work
                </label>
              </div>
              <select
                class="form-select"
                value={posting.natureofwork}
                onChange={handleChange}
                name="natureofwork"
              >
                <option selected value={""}>
                  Choose Option
                </option>
                <option value="alone">Alone</option>
                <option value="team">Team</option>
                <option value="client">Client</option>
              </select>
            </div>

            <div className="mb-3">
              <div>
                <label htmlFor="typeofwork" className="form-label">
                  Type Of Work
                </label>
              </div>
              <select
                class="form-select"
                value={posting.typeofwork}
                onChange={handleChange}
                name="typeofwork"
              >
                <option selected value={""}>
                  Choose Option
                </option>
                <option value="desk">Desk</option>
                <option value="fiels">Field</option>
                <option value="desk + field">Desk + Field</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">work Location</label>
              <select
                name="worklocation"
                value={posting.worklocation}
                className="form-select"
                onChange={handleChange}
              >
                <option value="office">Office</option>
                <option value={"remote"}>Remote</option>
                <option value={"hybrid"}>Hybrid</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">engagement type</label>
              <select
                name="engagementtype"
                onChange={handleChange}
                value={posting.engagementtype}
                className="form-select"
              >
                <option value={"fulltime"}>Full Time</option>
                <option value={"parttime"}>Part Time</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              {/* <input
                type={'text'}
                className='form-control'
                value={posting.role}
                name='role'
                onChange={handleChange}
              /> */}
              <select
                name="role"
                onChange={handleChange}
                className="form-select"
                value={posting.role}
              >
                <option value={''}>Choose Option</option>
                <option value={"Thematic SME"}>Thematic SME</option>
                <option value={"Social Value Chain Expert"}>Social Value Chain Expert</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Year</label>
              <input
                type={"text"}
                onChange={handleChange}
                value={posting.years}
                className="form-control"
                name="years"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Deadline</label>
              <DatePicker
                selected={deadline}
                onChange={(date) => setDeadline(date.toISOString())}
              />
            </div>

            <div className="col-md-12 text-center mb-3 mt-3">
              <Button variant="dark" className="btn-space" type="submit">
                Upload
              </Button>
              <Button variant="danger" type="reset" value="Reset">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Posting;
