import React,{useEffect, useState} from 'react'
import { fetchAcademicCertificates, fetchProfessionalProfile } from '../../apis/apis'
import Card from 'react-bootstrap/Card';
import { map } from 'jquery';


export const ProfessionalProfile = ({params}) => {

   const [data,setData] =useState([]);

   useEffect(()=>{
    
       fetchDetails()
  
      },[])

 
        const fetchDetails  = async ()=> {
         let res=await fetchProfessionalProfile(parseInt(12));
         setData(res)
       }

    
   
    return (
<>
{data?.map(el=>{
    return (
        <div style={{padding:"2%",color:"black"}}>
       <Card>
        <h4 style={{padding:"1%"}}>Professional Profile Information</h4>
       <div style={{padding:"0%",margin:"2%"}}>
        <div style={{color:"#808080"}} >Type: {el?.type}</div>
        <div style={{color:"#808080"}}> Organization:{el?.organization}</div>
        <div style={{color:"#808080"}}> Level of Expertise: {el?.levelOfexpertise}</div>
        <div style={{color:"#808080"}}> Geography: {el?.geography}</div>
        <div style={{color:"#808080"}}> Sample of work: {el?.sampleofwork}</div>
         <div style={{color:"#808080"}}> Fees Charged: Rs {el?.feescharged}</div>
         <div style={{color:"#808080"}}>Duration {el?.duration} months</div>
        <div style={{color:"#808080"}}>Responsibilities:</div>
        {
            el?.responsibilities.map(el=>{
                return (
                    <li style={{color:"#808080"}}>{el?.responsibility}
                    </li>
                )
            })
        }
        </div>
        </Card>
        </div>
   
    )
})}
</> 
    )

}