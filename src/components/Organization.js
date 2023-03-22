import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.css';
import axios from 'axios';
import validator from 'validator';
import NavBar from './NavBar';
import Demo from './Demo';
import Footer from './Footer';
import './Organization.css';
import Nav from './Nav';
import {Button, Modal, Form } from 'react-bootstrap';
// import Demo from './Demo';


const Organization  = () => {
    let history = useHistory();
    const [email,setEmail]=useState();
    const [emailError, setEmailError] = useState('')
    const validateEmail = (event) => {
      var email = event.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
        
      }
    }
    const organizationname = useRef();
    const sector = useRef();
    const firstname = useRef();
    const lastname = useRef();
    const phonenumber = useRef(); 
const submitHandler = (event) => {
event.preventDefault();
setEmail( event.target.email.value);
const organizationname = event.target.organizationname.value;
const sector = event.target.sector.value;
const email = event.target.email.value;
const password = event.target.password.value;
const firstname = event.target.firstname.value;
const lastname = event.target.lastname.value;
const phonenumber = parseInt(event.target.phonenumber.value);
const data = {organizationname, sector, email, password, firstname, lastname, phonenumber};
console.log(data);
axios.post("http://100.25.193.158:4000/client/", 
    data

)
.then(response => {
    console.log(response);
    // event.target.reset();
    window.alert("Your Data is saved Successfully");
    
  localStorage.setItem("Company",organizationname);
  localStorage.setItem("Sector",sector);
  localStorage.setItem("Name",firstname);
  localStorage.setItem("Surname",lastname);
  localStorage.setItem("Mobile",phonenumber);

})
.catch(error =>{
    console.log(error);
    window.alert("Something went wrong");
})
};
  return (
    <div>
        <Nav />
        <NavBar />
         
        
        <div id="regStd">
            <div id="poster">
                <div>
                    <div class="white-text">Hire the best Experts</div>
                    <h3>Register and post Opportunities for free now!</h3>
                    <h4>12 Mn+ Opportunities seekers  across India</h4>
                </div>
            </div>
            <div id="signupSec">
                <div id="signupDiv">
                    <form name="signupForm" onSubmit={submitHandler}>
                    <div class="details1">
                            <label>Company Name</label>
                            <input placeholder="Kutumb Aspiration" name="organizationname" ref={organizationname} required  />
                        </div>
                        <div class="details1">
                            <label>Sector</label>
                            <input placeholder="Education" name="sector" ref={sector}  />
                        </div>
                        
                        <div class="details1">
                            <label>Official Email Id</label>
                            <input placeholder="name@company_name.com" name="email" onChange={(event) => validateEmail(event)} required />
                            <br />
        <span>{emailError}</span>
      
                        </div>
                        <div class="details1">
                            <label>Password</label>
                            <input placeholder="Minimum 6 characters" type="password" name="password" minLength="6" required />
                        </div>
                        <div id="name">
                            <div class="details1">
                                <label>First Name</label>
                                <input placeholder="Your First Name" name="firstname" ref={firstname} required />
                            </div>
                            <div class="details1">
                                <label>Last Name</label>
                                <input placeholder="Your Last Name" name="lastname" ref={lastname} required />
                            </div>
                        </div>
                        <div class="details2">
                            <label>Mobile Number</label><br/>
                            <input value="+91" id="code"/>
                            <input type="tel" placeholder="10 digit mobile number" id="mob" name="phonenumber" ref={phonenumber} pattern="^\d{10}$" minlength="10" maxlength="10"  required />
                        </div>
                        <p id="tc">By signing up, you agree to our <span>Terms and Conditions</span>.</p>
                     
                     <Demo email={ email }/>
                    </form>
                    <p id="msg_regEmployer"><span>Have a question?</span></p>
                </div>
            </div>
        </div>
        <h1 class="textCenter">Hire interns in 3 simple steps</h1>
        <div id="stepsToFollow">
            <div class="steps">
                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/1_register.png"/>
                <h3 class="textCenter">1. Register</h3>
                <p class="textCenter">Get started by creating your account</p>
            </div>
            <div class="steps">
                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/2_post.png"/>
                <h3 class="textCenter">2. Post</h3>
                <p class="textCenter">Post internships for any profile and location</p>
            </div>
            <div class="steps">
                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/3_hire.png"/>
                <h3 class="textCenter">3. Hire</h3>
                <p class="textCenter">Screen and hire using our world class ATS</p>
            </div>
        </div>
        <h1 class="textCenter" id="noOfComp">2,84,686 companies trust us</h1>
        <button class="textCenter" id="regBtn">Register Now</button>
        <div id="knowMore">
            <div>
                <h2>Now also post fresher jobs on Social-Gurus</h2>
                <h6>Hire the best freshers <span>faster</span></h6>
                <div class="textCenter">Know More</div>
            </div>
        </div>
        <Footer />

    </div>
    
  )

}


export default Organization
