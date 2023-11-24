import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState({
        user: "",
        password: ""
    })
    
    const handle = (event) => {
        const property = event.target.name
        const value = event.target.value

        setUser({...user, [property]:value})
    }

    return(
        <form name="login">
            <label htmlFor="user">User: </label>
            <input type="text" name="user" placeholder="user123" onChange={handle}/>

            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" onChange={handle}/>
            
            <input type="submit"/>
        </form>
    )
}

export default Login;