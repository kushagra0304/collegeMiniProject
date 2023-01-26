import ImageViewerMagnifier  from "../components/imageViewer/imageViewerMagnifier/imageViewerMagnifier"
import ImageViewerMagnifierOutlet from "../components/imageViewer/imageViewerMagnifier/imageViewerMagnifierOulet";
import ImageViewerCarousel from "../components/imageViewer/imageViewerCarousel/imageViewerCarousel";
import Accordion from "../components/accordion/accordion";
import { useState, useEffect } from "react";
import "./product.css"

import data from "./data.json";

const accordion1 = () => {
    return (
        <>
            <p>
                Hello, World!
            </p>
        </>
    )
}

function Product() {

    const [magnifierImage, setMagnifierImage] = useState("https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jp");

    return (
        <>
            {/*
                product: adds specificity 
             */}
            <div className="product"> 
                <header className="product__header"></header>
                <main className="product__inner">
                    <section className="page-width">
                        <section className="product__details">
                            <div className="product-viewer">
                                <div className="product-viewer__magnifier">
                                    <ImageViewerMagnifier 
                                        tracerWidth="200px" 
                                        tracerHeight="100px" 
                                        magnifier={2} 
                                        src={magnifierImage}
                                    />
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
                                </div>
                                <div className="product-viewer__carousel">
                                    <ImageViewerCarousel images={data[0].images} height="600px"/>
                                </div>
                            </div>
                            <div className="product-info" >
                                <div className="product-info__magnifier-outlet">
                                    <ImageViewerMagnifierOutlet/>
                                </div>
                                <Accordion title="Material & Care" Content={accordion1}/>
                            </div>
                        </section>
                    </section>
                    <section className="product-recommendations">

                    </section>
                </main>
                <footer className="product__footer"></footer>
            </div>
        </>
    )
  }
  
  export default Product;