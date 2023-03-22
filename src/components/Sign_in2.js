import React, { useState,useRef } from 'react';
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Sign_in.css'
import Nav from './Nav';

const Sign_in2 = () => {
  const email = useRef()
  const password = useRef()

  
  let history = useHistory();
      const loginHandler2 = (event) => {
          event.preventDefault();
          
          const email = event.target.email.value;
          const password = event.target.password.value;
          const field2 = {email, password};
          console.log(field2);
          axios.post("http://100.25.193.158:4000/client/login", 
        field2)
        .then(response => {
          console.log(response);
          // event.target.reset();
          window.alert("Welcome to Social Gurus");
          history.push('/Profile_com');
          localStorage.setItem("email_client",email);
          localStorage.setItem("password_client",password);
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


<div className="container  mt-5">

    
    
<div class="login">
<div class="form">
<h2>Agencies</h2>
<Form onSubmit={loginHandler2}>

<input type="text" placeholder="Username" name="email" ref={email} />
<input type="password" placeholder="Password" name="password" ref={password} minLength="6" />
<input type="submit" value="Sign In" class="submit"  />
<ul style={{color: 'white'}}>For Gurus <Link style={{color: 'white'}} as={Link} to="/Sign_in"><b> Click Here</b></Link></ul>
</Form>
</div>
</div>
</div>

      
      <Footer />
      
    </div>
  )
}

export default Sign_in2
