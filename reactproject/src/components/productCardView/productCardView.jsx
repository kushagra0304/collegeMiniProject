import { useEffect } from "react";
import { Link } from "react-router-dom";
import productIndex from "../../variables/temp";
import "./productCardView.css"

function ProductCardView({ product }) {

    useEffect(() => {
        document.querySelector(`#productId${product.id}`).addEventListener("click", (event) => {
            productIndex["index"] = product.id
            document.querySelector("#ProductLink").click();
        })
    }, [])

    return (
        <div id={`productId${product.id}`} className="productCardView">
            <div className="productCardView__Image">
                <img src={product.images[0]} alt="" />
            </div>
            <div className="productCardView__info">
                <div className="productCardView__title">
                    {product.title}
                </div>
                <div className="productCardView__price"><b>{product.price}$</b></div>
            </div>
        </div>
    )
  }
  
  export default ProductCardView;