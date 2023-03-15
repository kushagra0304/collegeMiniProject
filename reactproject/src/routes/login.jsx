import { Link } from "react-router-dom";
import { useEffect } from 'react';

import accounts from "../data/accounts.json"

function loginHandler () {
    document.querySelector("#loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        
        
        const accountCredentials = event.target[0].value + event.target[1].value;

        if(accounts.accounts.indexOf(accountCredentials) > -1) {
            document.querySelector("#HomePageLink").click();
        }
        
    })
}

function Login() {

    useEffect(() => {
        loginHandler();
    }, [])

    return (
        <div>
            <h1>You are at Login page</h1>
            <form id="loginForm" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label> 
                    Enter Email:
                    <input type="text" id="loginId" name="LoginId" />
                </label>
                <label>
                    Enter Password:
                    <input type="text" id="loginPassword" name="LoginPassword" />
                </label>
                <button type='submit' value="Submit" style={{width: "100px"}}>Submit</button>
            </form>
            <ul style={{visibility: "hidden"}}>
                <li>
                    <Link id="HomePageLink" to={"/home"}>submit</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default Login;

{/*
    navbar - no
*/}