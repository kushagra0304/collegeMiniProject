import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>You are at Login page</h1>
            <ul>
                <li>
                    <Link to={"/home"}>submit</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default Login;

{/*
    navbar - no
*/}