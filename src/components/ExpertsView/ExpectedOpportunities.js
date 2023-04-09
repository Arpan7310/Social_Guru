import React,{useState,useEffect} from 'react'
import { fetchExpectedOpportunities } from '../../apis/apis';
import Card from 'react-bootstrap/Card'

export const ExpectedOpportunity = ({params}) =>{


    const [data,setData] =useState([]);

    useEffect(()=>{
  
      fetchDetails()

     },[])


     const fetchDetails  = async ()=> {
      let res=await fetchExpectedOpportunities(parseInt(12));

      setData(res)
      
    }

    return (
       <>
        {data?.map(el=>{
            return (
                <div style={{padding:"2%",color:"black"}}>
               <Card>
                <h4 style={{padding:"1%"}}>Expected Opportunities</h4>
               <div style={{padding:"0%",margin:"2%"}}>
                <div style={{color:"grey"}} >Desired Type: {el?.desiredtype}</div>
                <div style={{color:"grey"}}> Expectation: {el?.expectation}</div>
                <div style={{color:"grey"}}> Hours: {el?.hours}</div>
                <div style={{color:"grey"}}> Location: {el?.location}</div>
                <div style={{color:"grey"}}> Months: {el?.months}</div>
                <div style={{color:"grey"}}> Nature of Assignemnt: {el?.natureofassigment}</div>
                <div style={{color:"grey"}}> Travel Type: {el?.traveltype}</div>
                
               
                </div>
                </Card>
                </div>
           
            )
        }) }
        </>
    )
}