import React,{useEffect, useState} from 'react'
import { fetchAcademicCertificates } from '../../apis/apis'
import Card from 'react-bootstrap/Card';
import { map } from 'jquery';


export const AcademicCertificates = ({params}) => {

   const [data,setData] =useState([]);

   useEffect(()=>{
    
       fetchDetails()
  
      },[])

 
        const fetchDetails  = async ()=> {
         let res=await fetchAcademicCertificates(parseInt(params["employee"]));
         setData(res)
       }

    
   
    return (
<>
{data?.map(el=>{
    return (
        <div style={{padding:"5%",color:"black"}}>
       <Card>
        <h4 style={{padding:"1%"}}>Academic Certificates Information</h4>
       <div style={{padding:"0%",margin:"2%"}}>
        <div style={{color:"grey"}} >Qualification: {el?.educationalQualification}</div>
        <div style={{color:"grey"}}> Course End :{new Date(el?.courseend).toDateString()}</div>
        <div style={{color:"grey"}}> Course Start: {new Date(el?.coursestart).toDateString()}</div>
        <div style={{color:"grey"}}> Course: {el?.course}</div>
        <div style={{color:"grey"}}> Institute Name: {el?.institute}</div>
        <div style={{color:"grey"}}> Percentage: {el?.percentage}</div>
        <div style={{color:"grey"}}> Specialisation:{el?.specialisation}</div>
        </div>
        </Card>
        </div>
   
    )
})}
</> 
    )

}