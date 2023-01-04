import { Suspense, lazy } from 'react';
import { Link } from "react-router-dom";

const Temp = lazy(() => import("./temp"))


function CreateAccount() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <h1>You are at Create account page</h1>
                <ul>
                    <li>
                        <Link to={"/home"}>Submit</Link>
                    </li>
                </ul>
                <Temp/>
            </Suspense>
        </>
    )
  }
  
  export default CreateAccount;