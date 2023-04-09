import React ,{useState,useEffect} from 'react'
import { fetchProfessionalCertificates, fetchPublications } from '../../apis/apis';
import Card from 'react-bootstrap/Card';


export const ProfessionalCertificates = ({params}) => {

    const [data,setData] =useState([]);

     useEffect(()=>{
     
        fetchDetails()
  
      },[])

 
        const fetchDetails  = async ()=> {
         let res=await fetchProfessionalCertificates(parseInt(1));
         setData(res)
       }

    return (
        <>
        {data?.map(el=>{
            return (
                <div style={{padding:"2%",color:"black"}}>
               <Card>
                <h4 style={{padding:"1%"}}>Professional Certificates Info</h4>
               <div style={{padding:"0%",margin:"2%"}}>
                <div style={{color:"grey"}} >Course {el?.course}</div>
                <div style={{color:"grey"}}> Start Date: {new Date(el?.startDate).toDateString() }</div>
                <div style={{color:"grey"}}> End Date: {new Date(el?.endDate).toDateString()}</div>
                <div style={{color:"grey"}}> Institite: {el?.institute}</div>
                <div style={{color:"grey"}}> Grade: {el?.grade}</div>
                
               
                </div>
                </Card>
                </div>
           
            )
        })
    }
    
    
    
    </>
    )
}