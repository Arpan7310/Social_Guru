import React,{useState,useEffect} from 'react'
import { fetchEmployeeAwards } from '../../apis/apis';
import Card from 'react-bootstrap/Card';

export const Awards = ({params}) => {


  const [data,setData] =useState([]);

    useEffect(()=>{
  
      fetchDetails()

     },[])


     const fetchDetails  = async ()=> {
      let res=await fetchEmployeeAwards(parseInt(12));

      setData(res)
      
    }
    return (
      <>
      {data?.map(el=>{
        return (
            <div style={{padding:"2%",color:"black"}}>
           <Card>
            <h4 style={{padding:"1%"}}>Employee Awards</h4>
           <div style={{padding:"0%",margin:"2%"}}>
            <div style={{color:"grey"}} >Date : {new Date(el?.date).toDateString()}</div>
            <div style={{color:"grey"}}> LevelofAward: {el?.levelofaward}</div>
            <div style={{color:"grey"}}> Name: {new Date(el?.name).toDateString()}</div>
            <div style={{color:"grey"}}> Recognised By: {el?.recognisedby}</div>
            <div style={{color:"grey"}}> Grade: {el?.grade}</div>
            
           
            </div>
            </Card>
            </div>
       
        )
    }) }  
    </> 
    )

}