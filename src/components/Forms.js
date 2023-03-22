import axios from "axios"

let Forms = () => {
    axios.post("http://100.25.193.158:4000/auth/login", {
        headers: {
            "Authorization": `Bearer ${s}`
        }
    })

    return <>
    
    </>
}