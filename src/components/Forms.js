import axios from "axios"

let Forms = () => {
    axios.post("http://52.3.252.238:4000/auth/login", {
        headers: {
            "Authorization": `Bearer ${s}`
        }
    })

    return <>
    
    </>
}