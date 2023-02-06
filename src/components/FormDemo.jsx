import { useState } from "react"
import Greeting from "./Greeting"

export default function FormDemo () {
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const handleNameChange = (e) => {setName(e.target.value)}
    const handleEmail = (e) => {setEmail(e.target.value)
    }
    const handleForm = (e) => {
        e.preventDefault()
        alert(`Hello ${name} ${email}`)
    }
    return (
        <form onSubmit={handleForm}>
            <Greeting name={name} />
            <label htmlFor="name">
                Name 
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={handleNameChange}
                    // onChange={handleNameChange}
                />
            </label>
            <br/>
            <label htmlFor="email">
                Email 
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={handleEmail}
                    // onChange={handleNameChange}
                />
            </label><br/>
            <input type="submit" value="Login" />

        </form>
    )
}