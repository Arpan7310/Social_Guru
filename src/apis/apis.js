


export const fetchBasicProfile =async (empId) => {
  let res=await fetch(`http://3.84.158.17:4000/employee/fetchBasicProfile/${empId}`)
  let r =res.json();
  return r;
}



export const fetchProfessionalProfile = async (empId) =>{
 
  let res= await fetch (`http://3.84.158.17:4000/employee/fetchProfessionalProfile/${empId}`)
  let r= await res.json()
  return r;
}


export const fetchAcademicCertificates = async (empId) => {

let res=await fetch (`http://3.84.158.17:4000/employee/fetchAcademicCertificates/${empId}`)
let r=await res.json();
return r ;
}



export const fetchPublications = async (empId) => {
  let res=await fetch (`http://3.84.158.17:4000/employee/fetchPublications/${empId}`)
  let r=await res.json();
  return r ;
}


export const fetchProfessionalCertificates=async (empId) => {
  let res=await fetch (`http://3.84.158.17:4000/employee/fetchProfessionalCertificates/${empId}`)
  let r=await res.json();
  return r ;
}



export const fetchExpectedOpportunities = async (empId) => {
  let res=await fetch (`http://3.84.158.17:4000/employee/fetchExpectedOpportunities/${empId}`)
  let r=await res.json();
  return r ;
}


export const fetchEmployeeAwards =async (empId) => {

  let res=await fetch (`http://3.84.158.17:4000/employee/fetchEmployeeAwards/${empId}`)
  let r=await res.json();
  return r ;
}