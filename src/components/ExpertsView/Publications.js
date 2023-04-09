import React ,{useState,useEffect} from 'react'
import { fetchPublications } from '../../apis/apis';
import Card from 'react-bootstrap/Card';


export const Publications = ({params}) => {

    const [data,setData] =useState([]);

     useEffect(()=>{
     
        fetchDetails()
  
      },[])

 
        const fetchDetails  = async ()=> {
         let res=await fetchPublications(parseInt(1));
         setData(res)
       }

    return (
        <>
        {data?.map(el=>{
            return (
                <div style={{padding:"2%",color:"black"}}>
               <Card>
                <h4 style={{padding:"1%"}}>Publications Information</h4>
               <div style={{padding:"0%",margin:"2%"}}>
                <div style={{color:"grey"}} >Published At:  {new Date(el?.publishedat).toDateString()}</div>
                <div style={{color:"grey"}}> Publisher: {el?.publisher}</div>
                <div style={{color:"grey"}}> Book: {el?.book}</div>
                <div style={{color:"grey"}}> Topic: {el?.topic}</div>
               
                </div>
                </Card>
                </div>
           
            )
        })
    }
    
    
    
    </>
    )
}