import React from 'react';
import NavBar from './NavBar';
import './Footer.css';
import './Landing.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer'


const Landing = () => {
  return (
    <>
<Nav />
<NavBar />
<div id="searchbar">
        <input id="searchInput" placeholder="What are you looking for?" />
        <div id="searchGlass">
            <i class='bx bx-search'></i>
        </div>
</div>

<div id="scrollSlider">
        <div class="getWidth sliderImg1">
            <div class="sliderContentBox">
                <div>
                    <h1>Get ahead. Get an Opportunity!</h1>
                </div>
                <div class="sliderCheckMark">
                    <img src="https://internshala.com/static/images/common/check_box_dark.svg" alt="" />
                    <p>10,000+ Opportunies with stipend</p>
                </div>
                <div class="sliderCheckMark">
                    <img src="https://internshala.com/static/images/common/check_box_dark.svg" alt="" />
                    <p>100% verified</p>
                </div>
                <div class="sliderCheckMark">
                    <img src="https://internshala.com/static/images/common/check_box_dark.svg" alt="" />
                    <p>Apply for free</p>
                </div>
            </div>
        </div>
        <div class="getWidth sliderImg2">
            
        </div>
        <div className="getWidth sliderImg3">
            <div className="sliderContentBox">
            <div className="white-text">
                <h3>Introducing</h3>
            </div>
            <div className="white-text2 white-text">
                <h1>Fresher Job</h1>
                <span id="bgSpan">New</span>
            </div>
            <div className="white-text">
                    <h3>Apply to premium fresher jobs for free</h3>
                </div>
                <div class="sliderCheckMark white-text">
                    <img src="https://internshala.com/static/images/common/check_box_white.svg" alt="" />
                    <p>100% verified</p>
                </div>
                <div class="sliderCheckMark white-text">
                    <img src="https://internshala.com/static/images/common/check_box_white.svg" alt="" />
                    <p>Minimum CTC 3 LPA</p>
                </div>
                <div class="sliderCheckMark white-text">
                    <img src="https://internshala.com/static/images/common/check_box_white.svg" alt="" />
                    <p>Apply for free</p>
                </div>
            </div>
          
            
        </div>
        <div class="getWidth sliderImg4">
            
        </div>
        </div>

        <div id="login_modal_popup">

</div>

<div id="bigB">
        <div id="internships">
            <div class="headDiv">
                <div>
                    <h1 class="title">Opportunies</h1>
                    <p class="description">Apply to 10,000+ Opportunies for free</p>
                </div>
                <div>
                    <div class="anchor">
                        <Link as={Link} to="/Upload_opportunities">View all Opportunies &#8594;</Link>
                    </div>
                </div>
            </div>
            <div>
                <div class="header">Popular cities</div>
                <div class="gridB">
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" />
                        <p >Work From Home</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg" />
                        <p >Delhi/NCR</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/bangalore.svg" />
                        <p>Bangalore</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/mumbai.svg" />
                        <p >Mumbai</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/hyderabad.svg" />
                        <p >Hyderabad</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/chennai.svg" />
                        <p >Chennai</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/kolkata.svg" />
                        <p >Kolkata</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/international.svg" />
                        <p >International</p>
                    </div>
                </div>
            </div>
            <div>
            <div class="header">Popular categories</div>
            <div class="gridB">
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/part_time.svg" />
                    <p>Part time</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/engineering.svg" />
                    <p>Engineering</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/ngo.svg" />
                    <p>NGO</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/business_mba.svg" />
                    <p>MBA</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/design.svg" />
                    <p>Design</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/science.svg" />
                    <p>Science</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/media.svg" />
                    <p>Media</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/humanities.svg" />
                    <p>Humanities</p>
                </div>
            </div>
        </div>
    </div>
    <div id="internT">
        <div class="headDiv">
            <div>
                <div class="offers_75">
                    <h1 class="title">Social-Guru Trainings</h1>
                    <img src="https://internshala.com/cached_uploads/offer_tags/618b6119251e41636524313.png" alt="offers_75%" />
                </div>
                <p class="description">Learn new-age skills on the go</p>
            </div>
            <div>
                <div class="anchor">
                    <a href="/">View all trainings &#8594;</a>
                </div>
            </div>
        </div>
        <div>
            <div class="gridC">
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg" />
                    <p>Programming <br /> with Python</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg" />
                    <p>Digital <br /> Marketing</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/web_development.svg" />
                    <p>Web <br /> Development</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/machine_learning.svg" />
                    <p>Machine <br /> Learning</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg" />
                    <p>Advanced Excel</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/programming_with_c_and_c++.svg" />
                    <p>C/C++ Programming</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/autocad.svg" />
                    <p>AutoCAD</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/data_science.svg" />
                    <p>Data Science</p>
                </div>
            </div>
        </div>
</div>
<div id="freshJ">
    <div class="headDiv">
        <div>
            <h1 class="title">Fresher Jobs <span id="bgSpan"><span id="new">New</span></span></h1>
            <p class="description">Premium fresher jobs on your fingertips</p>
        </div>
        <div>
            <div class="anchor">
                <a href="/">View all jobs &#8594;</a>
            </div>
        </div>
    </div>
    <div>
        <div id="gridD">
            <div>
                <img src="https://internshala.com/static/images/home/jobs/perks/ctc.svg" />
                <p>Minimum CTC of 3 LPA</p>
            </div>
            <div>
                <img src="https://internshala.com/static/images/home/jobs/perks/dream.svg" />
                <p>Dream companies</p>
            </div>
            <div>
                <img src="https://internshala.com/static/images/home/jobs/perks/verified.svg" />
                <p>100% verified jobs</p>
            </div>
        </div>
    </div>
</div>
</div>



<Footer />
    </>
  );
};
export default Landing;