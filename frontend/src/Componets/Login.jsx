import React, {useState} from "react"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const handleSubmit = () => {
        const payload = {
            email,
            password,
        }
        
        fetch("http://localhost:8000/users/login", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.msg)
            localStorage.setItem("token", res.token)
        })
        .catch((err) => console.log(err))
    }
    return <div>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Log in!</button>
    </div>
}


export {Login}