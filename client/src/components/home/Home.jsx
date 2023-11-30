import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const Home = () => {
    const [user] = useContext(UserContext)
    if(!user.accesstoken) return <Navigate to="/login"/>
    return(
        <div>
            <h1>Ubicación Home</h1>
        </div>
    )
}

export default Home;