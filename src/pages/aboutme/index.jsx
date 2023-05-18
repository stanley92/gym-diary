import { UserContext } from "../../contexts/UserContext";
import {useContext} from "react";

const AboutMe = () => {

    const {username, setUsername} = useContext(UserContext);

    const handleChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    return(
        <>
            <div>About Me</div>
            <div className="flex">
                <form>
                    <input type="text" className="custom-input basis-1/12" value={username} onChange={handleChange} name="username" /> 
                </form>
            </div>
        </>
    );
}

export default AboutMe;