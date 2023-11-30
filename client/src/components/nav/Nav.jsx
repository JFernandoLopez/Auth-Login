import { Link } from "react-router-dom"

const Nav = ({logOut}) => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>   
            <Link to="/protected"><button>Protected</button></Link> 
            <Link to="/signup"><button>Sign In</button></Link>  
            <button onClick={logOut}>Log Out</button>   
        </div>
    )
}

export default Nav