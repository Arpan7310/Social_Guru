import { DatePicker } from "antd";
import axios from "axios";
import { useState } from "react";
import NavBar3 from "../components/NavBar3";
import Nav_Experts from "../components/Nav_Experts";
let Publication_profile = () => {
  let [profile, setProfile] = useState({
    author: [],
    publisher: "",
    book: "",
    topic: "",
    publishedat: "",
  });
  let [publishedat, setPublishedat] = useState(new Date());
  let employeeId = localStorage.getItem("ID_employee");
  let access_token = localStorage.getItem("access_token");

  let [authorList, setAuthorList] = useState([]);
  let [authorName, setAuthorName] = useState("");
  let handleAdd = () => {
    if (authorName != 0) {
      if (!authorList.includes(authorName)) {
        setAuthorList([...authorList, authorName]);
      }
    }
    console.log(authorList);
  };
  let handleRemove = (index) => {
    let list = [...authorList];
    list.splice(index, 1);
    console.log(list);
    setAuthorList(list);
  };

  let handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    profile.author = [...authorList];
    profile.publishedat = publishedat;
    profile = {...profile, employeeId: Number(employeeId)} 
    axios.post('http://100.25.193.158:4000/employee/savePublications', profile, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  };

  return (
    <>
    <Nav_Experts />
      <NavBar3 />
      <form
        className="basic_profile_form"
        method="POST"
        onSubmit={handleSubmit}
        style={{marginTop: '5rem'}}
      >
        <div className="basic_profile_field" >
          <div>
            <label htmlFor="author">author: </label>
          </div>
          <input
            type={"text"}
            onChange={(e) => setAuthorName(e.target.value)}
            name="author"
            required
            style={{marginBottom: '1rem'}}
          />
          <button onClick={handleAdd} style={{margin: '0 1rem'}}>add</button>
          {authorList.map((el, index) => {
            return (
              <>
                <span style={{margin: '0 1rem'}}>{el}</span>
                <button onClick={() => handleRemove(index)}>remove</button>
              </>
            );
          })}
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="publisher">publisher: </label>
          </div>
          <input
            type={"text"}
            onChange={handleChange}
            name="publisher"
            required
          />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="book">book: </label>
          </div>
          <input type={"text"} onChange={handleChange} name="book" required />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="topic">topic: </label>
          </div>
          <input type={"text"} onChange={handleChange} name="topic" required />
        </div>
        <div className="basic_profile_field">
          <div>
            <label htmlFor="endDate">published at: </label>
          </div>
          <DatePicker
            selected={publishedat}
            onChange={(date) => setPublishedat(date.toISOString())}
          />
        </div>
        <div className="" style={{gridColumnStart: 1, gridColumnEnd: 3}}><input type={"submit"} value="submit" /></div>
      </form>
    </>
  );
};
export default Publication_profile;
