import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Apply = () => {
  return (
    <div className="container">
        
    <div  fluid="md" className='container square-box mt-3'>
      <Row>
        <Col className="bg-light">
        <h1 class="text-center ">Front-End-Web Development at Kutumb Aspiration</h1>
        </Col>
        
      </Row>
      <div class="p-3">
                 
                <div>
    <h4> Responsibilities</h4>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatem, tempora beatae dignissimos suscipit sequi necessitatibus velit dolor et doloribus! </p>

                </div>

                <h4> Skills Required </h4>
    
    <div>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    </div>
    
    
    <div>
        <h4>Mode</h4>
        <p>Remote Work :- </p>
    </div>
    <h4> Cities For In Office Work </h4>
    
    <div>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    </div>
    <div>
        <h4>Duration</h4>
        <p>2 month</p>
    </div>
    <div>
        <h4>Openings</h4>
        <p> 4</p>
    </div>
    <div>
        <h4>Stipend</h4>
        <p> Upto 10000</p>
    </div>
                </div>
                <div className='col-md-12 text-center mb-3'>
<Button variant="dark" className="btn-space" type="submit">Apply</Button>

</div>
      </div>  


    
    </div>
    
  )
}

export default Apply
