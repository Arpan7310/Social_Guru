import React, { useState, useRef } from 'react';
import validator from 'validator';
import { useHistory } from 'react-router-dom';
import './Employee.css';
import Footer from './Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Test from './Test';
import NavBar from './NavBar';
import Nav from './Nav';
const Employee = () => {
    let history  = useHistory();
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
    const firstname = useRef();
    const lastname = useRef();
    const phonenumber = useRef();
    const submitFunc = (event) => {
        event.preventDefault();
        setEmail( event.target.email.value);
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const phonenumber = parseInt(event.target.phonenumber.value);
        const stack = {email, password, firstname, lastname, phonenumber};
        console.log(stack);
        axios.post("http://3.84.158.17:4000/employee/", 
            stack
        
        )
        .then(response => {
            console.log(response);
            event.target.reset();
            window.alert("Your Data is saved Successfully");
            localStorage.setItem("Employee_name",firstname);
            localStorage.setItem("Employee_sur",lastname);
            localStorage.setItem("Employee_num",phonenumber);
            
        
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
      <div id="regStd1">
        <div id="poster1">
            <div>
                <div>A <span>free</span> ride to your dream career</div>
                <h3>Register and apply to 10000+ opportunities</h3>
                <div class="cat">
                    <img src="https://internshala.com/static/images/common/check_box.svg" />
                    <h4>Internships</h4>
                </div>
                <div class="cat">
                    <img src="https://internshala.com/static/images/common/check_box.svg " />
                    <h4>Fresher jobs</h4>
                </div>
                <div class="cat">
                    <img src="https://internshala.com/static/images/common/check_box.svg" />
                    <h4>Work from home jobs</h4>
                </div>
            </div>
        </div>
        <div id="signupSec1">
            <div id="signupDiv1">
                <div class="textCenter1" id="signGoogle">
                    <img src="https://internshala.com/static/images/login/google_logo.png" />
                    <h4>Sign Up with Google</h4>
                </div>
                <div id="horStroke">

                </div>
                <div class="textCenter1" id="opt">
                    <p>OR</p>
                </div>
                <form onSubmit={submitFunc} method='POST'>
                    <div class="details1">
                        <label>Email</label>
                        <input placeholder="vivek@example.com" name='email' onChange={(event) => validateEmail(event)} required />
                        <br />
                        <span>{emailError}</span>
                    </div>
                    <div class="details1">
                        <label>Password</label>
                        <input placeholder="Must be at least 6 characters" type="password" name="password" minlength="6" required />
                       
                    </div>
                    
                    <div id="name1">
                        <div class="details1">
                            <label>First Name</label>
                            <input placeholder="Vivek" name='firstname' ref={firstname} required/>
                        </div>
                        <div class="details1">
                            <label>Last Name</label>
                            <input placeholder="Sharma" name='lastname' ref={lastname} required/>
                        </div>
                    </div>
                    <div class="details1">
                    <label>Mobile Number</label><br/>
                            <input value="+91" id="code"/>
                            <input type="tel" placeholder="10 digit mobile number" id="mob" name="phonenumber" ref={phonenumber} pattern="^\d{10}$"  minlength="10" maxlength="10" required/>
                        </div>
                    <p id="tc1">By signing up, you agree to our <span>Terms and Conditions</span>.</p>
                  <Test />
                </form>
                <p id="msg_regStudent">Already registered? <span><Link as={Link} to="/Login">Login</Link></span></p>
            </div>
        </div>
    </div>
<div></div>
<div></div>
<div></div>
<Footer />
</div>



  )
}

export default Employee
