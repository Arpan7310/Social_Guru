import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";

let Special_profile = () => {
  let [profile, setProfile] = useState({
    type: "",
    organization: "",
    duration: "",
    levelOfexpertise: "",
    geography: "",
    achievements: [],
    responsibilities: [],
    sampleofwork: "",
    value: "",
    income: "",
    feescharged: "",
    employeeId: "",
  });

  let [responsiblity, setResposiblity] = useState([]);
  let [options, setOptions] = useState([]);
  
  let employeeId = localStorage.getItem("ID_employee");
  let access_token = localStorage.getItem("access_token");
  useEffect(() => {
    console.log('useeffect called');
    let getResponsiblities = () => {
      axios
        .get("http://3.84.158.17:4000/employee/fetchResponsibilities")
        .then((respose) => {
          setResposiblity(respose.data);
          let array = []
          respose.data?.map((each) => {
            let newObj = {};
            newObj.id = each.id;
            newObj.name = each.responsibility;
            array.push(newObj);
          });
          setOptions(array)
          console.log(responsiblity);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getResponsiblities();
    
    console.log(options);
  }, []);

  
  let handleChange = (e) => {
    if (e.target.name === "responsibilities") {
      let copy = { ...profile };
      if (e.target.checked) {
        copy.responsibilities.push(e.target.value);
      } else {
        copy.responsibilities = copy.responsibilities.filter(
          (el) => el !== e.target.value
        );
      }
      setProfile(copy);
    } else {
      setProfile({
        ...profile,
        [e.target.name]: e.target.value,
      });
    }
  };


  let [achievementsList, setAchievementsList] = useState([]);
  let [achievement, setAchievement] = useState("");

  let handleAdd = () => {
    if (achievement.length != 0) {
      if (!achievementsList.includes(achievement)) {
        setAchievementsList([...achievementsList, achievement]);
      }
    }
  };
  console.log(achievementsList);

  let handleRemove = (index) => {
    let list = [...achievementsList];
    list.splice(index, 1);
    console.log(list);
    setAchievementsList(list);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof profile.income);
    profile.income = Number(profile.income);
    profile.employeeId = Number(profile.employeeId);
    profile.duration = Number(profile.duration);
    profile.feesCharged = Number(profile.feescharged);
    setProfile({
      ...profile,
      ["achievements"]: [...achievementsList],
    });
    profile = { ...profile, employeeId };

    axios
      .post(
        "http://3.84.158.17:4000/employee/saveProfessionalProfile",
        profile,
        {
          headers: `Bearer ${access_token}`,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("erre" + err);
      });
    console.log(profile);
  };

  let handleSelect = (selectedList, selectItem) => {
    console.log(selectItem);
    let copy = { ...profile };
    copy.responsibilities.push(selectItem);
    console.log(profile);
  };
  let onRemove = (removeList, removeItem) => {
    let copy = { ...profile };
    console.log('removed item: ' + removeItem.id);
    copy.responsibilities = copy.responsibilities.filter(
      (el) => {
        if (el.id !== removeItem.id) {
          return el
        }
      }
    );
    profile.responsibilities = copy.responsibilities
    console.log(profile);
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
            <label htmlFor="type">Type: </label>
          </div>
          <select name="type" onChange={handleChange} value={profile.type}>
            <option value={""} disabled selected>
              Choose Type
            </option>
            <option value={"Value Chain Expert"}>Value Chain Expert</option>
            <option value={"Thematic Expert"}>Thematic Expert</option>
          </select>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="organization">Organization</label>
          </div>
          <input
            onChange={handleChange}
            name="organization"
            value={profile.organization}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="duration">Duration</label>
          </div>
          <input
            type={"number"}
            onChange={handleChange}
            name="duration"
            value={profile.duration}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="levelOfExpertise">Level of expertise</label>
          </div>
          <select
            onChange={handleChange}
            name="levelOfexpertise"
            value={profile.levelOfexpertise}
            required
          >
            <option value={"easy"}>Easy</option>
            <option value={"medium"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="geography">Geography</label>
          </div>

          <input
            type={"text"}
            onChange={handleChange}
            name="geography"
            value={profile.geography}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="responsibilities">Responsiblities</label>
          </div>
          {/* <div className="responsiblity">
            {responsiblity.map((each) => {
              return (
                <>
                  <input
                    value={each.responsibility}
                    name="responsibilities"
                    type={"checkbox"}
                    onChange={handleChange}
                  />
                  <label value={each.responsibility}>
                    {each.responsibility}
                  </label>
                </>
              );
            })}
          </div> */}
          <div className="responsiblity">
            <Multiselect
              options={options}
              onSelect={handleSelect}
              onRemove={onRemove}
              displayValue="name"
            />
          </div>
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="smapleOfWork">Sample of word</label>
          </div>
          <input
            type={"text"}
            name="sampleofwork"
            value={profile.sampleofwork}
            onChange={handleChange}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="value">Value</label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            value={profile.value}
            name="value"
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="income">Income</label>
          </div>
          <input
            type={"number"}
            onChange={handleChange}
            value={profile.income}
            name="income"
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="idproof">Fees Charged</label>
          </div>
          <input
            type={"number"}
            onChange={handleChange}
            name="feescharged"
            value={profile.feescharged}
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="achievements">Achievements</label>
          </div>
          <div>
            <input
              type={"text"}
              name="achievements"
              onChange={(e) => setAchievement(e.target.value)}
              required
            />
            <button onClick={handleAdd}>add</button>
          </div>
          {achievementsList.map((each, index) => {
            return (
              <>
                <span>{each}</span>
                <button onClick={() => handleRemove(index)}>remove</button>
              </>
            );
          })}
        </div>

        <input type={"submit"} value={"submit"} />
      </form>
    </>
  );
};
export default Special_profile;
