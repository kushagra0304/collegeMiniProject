import ImageViewerMagnifier  from "../components/imageViewer/imageViewerMagnifier/imageViewerMagnifier"
import ImageViewerMagnifierOutlet from "../components/imageViewer/imageViewerMagnifier/imageViewerMagnifierOulet";
import ImageViewerCarousel from "../components/imageViewer/imageViewerCarousel/imageViewerCarousel";
import { useState, useEffect } from "react";
import "./product.css"

import data from "./data.json";

function Product() {

    const [magnifierImage, setMagnifierImage] = useState("https://i.dummyjson.com/data/products/6/thumbnail.png");

    return (
        <>
            <div className="product">
                <header className="product__header"></header>
                <main className="product__inner">
                    <div className="product__details">
                        <div className="product-viewer">
                            <div className="product-viewer__magnifier">
                                <div className="gallery">
                                    <ul>
                                        {data[0].images.map((imageLink) => {
                                            return (
                                                <>
                                                    <li><img src={imageLink} onMouseOver={() => {setMagnifierImage(imageLink)}}/></li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <ImageViewerMagnifier 
                                    tracerWidth="100px" 
                                    tracerHeight="200px" 
                                    imageWidth="500px" 
                                    magnifier={2} 
                                    src={magnifierImage}
                                />
                            </div>
                            <div className="product-viewer__carousel">
                                <ImageViewerCarousel images={data[0].images} height="600px"/>
                            </div>
                        </div>
                        <div className="product-info" >
                            <div className="product-viewer__magnifier-outlet">
                                <ImageViewerMagnifierOutlet/>
                            </div>
                        </div>
                    </div>
                    <div className="product-recommendations">

                    </div>
                </main>
                <footer className="product__footer"></footer>
            </div>
        </>
    )
  }
  
  export default Product;