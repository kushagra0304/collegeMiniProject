import { useEffect } from 'react';
import { Link } from "react-router-dom";
import accounts from "../data/accounts.json"

function loginHandler () {
    document.querySelector("#CreateAccountForm").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const accountCredentials = event.target[0].value + event.target[1].value;

        accounts.accounts.push(accountCredentials);
        document.querySelector("#createAccountHomePageLink").click();
    })
}

function CreateAccount() {

    useEffect(() => {
        loginHandler();
    }, [])

    return (
        <>
            <h1>You are at Create account page</h1>
            <form id='CreateAccountForm' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label>
                    Enter Email:
                    <input type="text" id="CreateAccountEmail" name="CreateAccountEmail"/>
                </label>
                <label>
                    Create Password:
                    <input type="text" id="CreateAccountPassword" name="CreateAccountPassword"/>
                </label>
                <label>
                    Enter Name:
                    <input type="text" id="CreateAccountName" name='CreateAccountName'/>
                </label>
                <label>
                    Enter Number:
                    <input type="text" id="CreateAccountNumber" name="CreateAccountNumber"/>
                </label>
                <button type='submit' value="Submit">Submit</button>
            </form>
            <ul style={{visibility: "hidden"}}>
                <li>
                    <Link id="createAccountHomePageLink" to={"/home"}>submit</Link>
                </li>
            </ul>
        </>
    )
  }
  
  export default CreateAccount;