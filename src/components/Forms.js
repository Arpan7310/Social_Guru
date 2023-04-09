import axios from "axios"

let Forms = () => {
    axios.post("http://3.84.158.17:4000/auth/login", {
        headers: {
            "Authorization": `Bearer ${s}`
        }
    })

    return <>
    
    </>
}