import Landing from "./components/Landing";
import "./App.css";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Posting from "./components/Posting";
import Employee from "./components/Employee";
import Organization from "./components/Organization";
import NavBar from "./components/NavBar";
import You from "./components/You";
import Notification from "./components/Notification";
import Connect from "./components/Connect";
import Apply from "./components/Apply";
import SearchSec from "./components/SearchSec";
import Overview from "./components/Overview";
import Jobs from "./components/Jobs";
import Profile from "./components/Profile";
import Profile_com from "./components/Profile_com";
import Sign_in from "./components/Sign_in";
import Sign_in2 from "./components/Sign_in2";
import Applied from "./components/Applied";
import Applications from "./components/Applications";
import Applicants_Modal from "./components/Applicants_Modal";
import Cong from "./components/Cong";
import Speak from "./components/Speak";
import Nav_Agencies from "./components/Nav_Agencies";
import Nav_Experts from "./components/Nav_Experts";
import { Connect_Emp } from "./components/Connect_Emp";
import { You_Emp } from "./components/You_Emp";
import { Notification_Emp } from "./components/Notification_Emp";
import Input_footer from "./components/Input_footer";
import Input_footer2 from "./components/Input_footer2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import socketIO from "socket.io-client";
import { useState } from "react";
import Basic_profile from "./profiles/Basic_profile";
import Special_profile from "./profiles/Special_profile";
import Academic_profile from "./profiles/Academic_profile";
import Certification_profile from "./profiles/Certification_profile";
const socket = socketIO.connect("http://100.25.193.158:4001/");

function App() {
  console.log(socket);
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/Login" component={Sign_in}></Route>
            <Route path="/Employee" component={Employee}></Route>
            <Route path="/Sign_in" component={Sign_in}></Route>
            <Route path="/Sign_in2" component={Sign_in2}></Route>
            <Route path='/Basic_profile' component={Basic_profile} />
            <Route path='/Special_profile' component={Special_profile}/>
            <Route path='/Academic_profile' component={Academic_profile} />
            <Route path={'/Certification_profile'} component={Certification_profile} />
            <Route path="/Apply" component={Apply}></Route>
            <Route path="/Applied" component={Applied}></Route>
            <Route path="/Applications" component={Applications}></Route>
            <Route
              path="/Applicants_Modal"
              component={Applicants_Modal}
            ></Route>
            <Route path="/Cong" component={Cong}></Route>
            <Route path="/Organization" component={Organization}></Route>
            <Route path="/Notification" component={Notification}></Route>
            <Route path="/You" component={You}></Route>

            <Route
              path="/Connect/:employee"
              component={() => <Connect socket={socket} />}
            />
            <Route path="/Posting" component={Posting}></Route>
            <Route path="/SearchSec" component={SearchSec}></Route>
            <Route path="/Overview" component={Overview}></Route>
            <Route path="/Jobs" component={Jobs}></Route>
            <Route path="/Profile" component={Profile}></Route>
            <Route path="/Profile_com" component={Profile_com}></Route>
            <Route path="/Speak" component={Speak}></Route>
            <Route path="/Nav_Agencies" component={Nav_Agencies}></Route>
            <Route path="/Nav_Experts" component={Nav_Experts}></Route>
            <Route path="/You_Emp" component={You_Emp}></Route>

            <Route
              path="/Input_footer"
              component={() => <Input_footer socket={socket} />}
            />
            <Route
              path="/Input_footer2"
              component={() => <Input_footer2 socket={socket} />}
            />
            <Route
              path="/Connect_Emp/:client"
              component={() => <Connect_Emp socket={socket} />}
            />

            {/* <Route path="/Connect_Emp">
          <Connect_Emp socket={socket}/>
         </Route>
             */}

            <Route
              path="/Notification_Emp"
              component={Notification_Emp}
            ></Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
