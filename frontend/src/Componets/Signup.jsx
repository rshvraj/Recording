import React, {useState} from "react"


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  

    const handleSubmit = () => {
        const payload = {
            email,
            password,
        
        }
        
        fetch("http://localhost:8000/users/signup", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return <div>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
       
        <button onClick={handleSubmit}>Sign up!</button>
    </div>
}


export {Signup}