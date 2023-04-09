import React ,{useState} from 'react'
import {useParams} from 'react-router-dom'
import ExpertsNavBar from '../components/ExpertsNavBar';
import { AcademicCertificates } from '../components/ExpertsView/AcademicCertificates';
import { Awards } from '../components/ExpertsView/AwardsProfile';
import { BasicProfileView } from '../components/ExpertsView/BasicProfileView';
import { ExpectedOpportunity } from '../components/ExpertsView/ExpectedOpportunities';
import { ProfessionalCertificates } from '../components/ExpertsView/ProfessionalCertificates';
import { ProfessionalProfile } from '../components/ExpertsView/ProfessionalProfile';
import { Publications } from '../components/ExpertsView/Publications';
import Nav from '../components/Nav'
import Publication_profile from '../profiles/Publication_profile';


export const ExpertsView = () =>{

    const [index,setIndex] =useState(0);
    const params = useParams();
   

    return (
        <div>
            <Nav >
            </Nav>
            <ExpertsNavBar setIndex={setIndex} />
            {index===0 && <BasicProfileView params={params} /> }
            {index===1 && <AcademicCertificates  params={params}/>}
            {index===2 && <ProfessionalProfile  params={params}/>}
            {index===3 && <Publications  params={params} />}
            {index===4 && <ProfessionalCertificates params={params} />}
            {index===5 && <Awards params={params} />}
            {index===6 && <ExpectedOpportunity  params={params} />}
            
         

            
        </div>
    )
}