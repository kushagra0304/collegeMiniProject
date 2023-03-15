import Nav from "../components/nav/nav"
import { Link } from "react-router-dom";
import ProductCardView from "../components/productCardView/productCardView";
import data from "../components/nav/data.json";
import "./search.css"

function Search() {
    return (
        <div>
            <h1>You are at Search page</h1>
            <ul>
                <li>
                    <Link id="ProductLink" to={"/product"}>product</Link>
                </li>
            </ul>
            <div className="searchPage">
                {
                    data.products.map((product) => {
                        return <ProductCardView product={product}/>
                    })
                }
            </div>
        </div>
    )
  }
  
  export default Search;