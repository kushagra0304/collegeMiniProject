import Nav from "../components/nav/nav"
import { Link } from "react-router-dom";

function Search() {
    return (
        <div>
            <h1>You are at Search page</h1>
            <Nav/>
            <ul>
                <li>
                    <Link to={"/product"}>product</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default Search;