import React, { useEffect } from "react";
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

const Posting = () => {
  // Date Checker

  // For Constantly Updating the Skills
  function onSelect(selectedList, selectedItem) {
    // let skill_value = selectedItem.skill;
    console.log(selectedList);
    setSkill(selectedList);
  }

  // For Constantly Updating the cities
  function onSelect2(selectedList, selectedItem) {
    console.log(selectedList);
    setCity(selectedList);
  }

  const [knowloc, setKnowloc] = useState();

  let Roll_client = localStorage.getItem("ID_client");
  console.log("The ID for client is ", parseInt(Roll_client));

  const postjob = (event) => {
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
      .post("http://100.25.193.158:4000/jobs/save", database)
      .then((response) => {
        console.log(response);
        window.alert("job Posted");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Unable to Post Job");
      });
  };

  // const [options] = useState(data);

  // Setting City State Variable for Constantly Updating it
  const [city, setCity] = useState();

  const [cities_opt, setCities_opt] = useState();

  useEffect(() => {
    axios
      .get("http://100.25.193.158:4000/jobs/city/")
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
      .get("http://100.25.193.158:4000/jobs/skills/")
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
          <Form onSubmit={postjob}>
            <div class="mb-3">
              <label class="form-label">Opportunities Description </label>
              <input class="form-control" name="jobprofile" required />
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
                  onSelect={onSelect2}
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
                name="openings"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Duration</label>
              <input
                class="form-control"
                type="number"
                name="duration"
                required
              />
              <Form.Text className="text-muted">
                Mention Duration in Months Only
              </Form.Text>
            </div>

            <div class="mb-3">
              <label class="text-left">Experts Responsibility</label>
              <textarea
                class="form-control"
                name="responsibilities"
                rows="3"
                required
              ></textarea>
            </div>

            <div class="mb-3">
              <label class="form-label">Required Skillset</label>
              <Multiselect
                options={skill_opt}
                displayValue="skill"
                onSelect={onSelect}
                required
              ></Multiselect>
            </div>

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
                />
              </div>
            )}

            <div class="mb-3">
              <label class="form-label">Application Start Date</label>
              <input
                class="form-control"
                type="datetime-local"
                name="startDate"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Application End Date</label>
              <input
                class="form-control"
                type="datetime-local"
                name="endDate"
                required
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
