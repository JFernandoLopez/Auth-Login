import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from 'axios'


const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setUser({...info, [property]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await (axios.post('http://localhost:3001/login', {
            email: info.email,
            password: info.password
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })).data
        if(response.accesstoken) {
            setUser({
                accesstoken: response.accesstoken,
            });
            navigator("/")
        } else {
            console.log(response.error);
        }
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    return(
        <form name="login">
            <label htmlFor="email">User: </label>
            <input type="text" name="email" placeholder="user123" onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" onChange={handleChange}/>
            
            <input type="submit" onSubmit={handleSubmit}/>
        </form>
    )
}

export default Login;