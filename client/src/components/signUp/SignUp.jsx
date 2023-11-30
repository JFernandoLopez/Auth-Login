import { useState } from "react"

const SignUp = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        location: "",
        phoneNumber: ""
    })
    
    const handle = (event) => {
        const property = event.target.name
        const value = event.target.value

        setUser({...user, [property]:value})
    }

    return(
        <form name="login">
            <label htmlFor="userName">User: </label>
            <input type="text" name="userName" placeholder="user123" onChange={handle}/>

            <label htmlFor="email">Password</label>
            <input type="text" name="email" placeholder="email@xxx.xxx" onChange={handle}/>

            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" onChange={handle}/>

            <label htmlFor="location">Password</label>
            <input type="text" name="location" placeholder="Mexico/Argentina/Perú/Colombia" onChange={handle}/>

            <label htmlFor="phoneNumber">Password</label>
            <input type="number" name="phoneNumber" placeholder="05272222222" onChange={handle}/>
            
            <input type="submit"/>
        </form>
    )
}

export default SignUp