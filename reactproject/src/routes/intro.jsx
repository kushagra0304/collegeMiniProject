import { Suspense, lazy } from 'react';
import { Link } from "react-router-dom";

const Temp = lazy(() => import("./temp"))


function Intro() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <h1>You are at Intro page</h1>
                <ul>
                    <li>
                        <Link to={"login"}>login</Link>
                    </li>
                    <li>
                        <Link to={"createAccount"}>create an account</Link>
                    </li>
                </ul>
                <Temp/>
            </Suspense>
        </>
    )
  }
    
  export default Intro;