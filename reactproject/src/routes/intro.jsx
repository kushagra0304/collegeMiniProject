import { Link } from "react-router-dom";

function Intro() {

    return (
        <>
            <h1>Login</h1>
            <ul>
                <li>
                    <Link to={"/login"}>login</Link>
                </li>
                <li>
                    <Link to={"/createAccount"}>create an account</Link>
                </li>
            </ul>
        </>
    )
  }
    
  export default Intro;