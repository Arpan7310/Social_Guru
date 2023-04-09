import React,{useState,useEffect} from 'react'
import { fetchBasicProfile, fetchPublications } from '../../apis/apis';
import Card from 'react-bootstrap/Card'


export const BasicProfileView = ({params}) => {



    const [data,setData] =useState([]);


    const fetchData = async () => {

        try {
          const res=await fetchBasicProfile(12)
       
          setData(res)
        }
        catch (e) {
            console.log(e)
        }
    }


    useEffect(()=>{


        fetchData()

    },[])

    return (
        <>
       {data?.map(el=>{
        return (
            <div style={{padding:"2%",color:"black"}}>
           <Card>
            <h4 style={{padding:"1%"}}>Employee Information</h4>
           <div style={{padding:"0%",margin:"2%"}}>
            <div style={{color:"grey",fontFamily:'sans-serif'}} >First Name: {el?.firstname}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}> Last Name: {el?.lastname}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}> Proficient language: {el?.languageProficieny}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}> Proficient level: {el?.languageProficiencylevel}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}> Phone Number: {el?.phonenumber}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}>Email: {el?.email}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}>DOB: {new Date(el?.dob).toDateString()}</div>
            <div style={{color:"grey",fontFamily:'sans-serif'}}>Martial Status: {el?.martialStatus}</div>
           
            </div>
            </Card>
            </div>
       
        )
    }) }  
        </>
    )
}


