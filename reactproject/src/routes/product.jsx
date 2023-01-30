import ImageViewerMagnifier  from "../components/imageViewer/imageViewerMagnifier/imageViewerMagnifier"
import ImageViewerMagnifierOutlet from "../components/imageViewer/imageViewerMagnifier/imageViewerMagnifierOulet";
import ImageViewerCarousel from "../components/imageViewer/imageViewerCarousel/imageViewerCarousel";
import Accordion from "../components/accordion/accordion";
import { useState, useEffect } from "react";
import "./product.css"

import data from "./data.json";

const AccordionContent = ({content}) => {
    return (
        <>
            <p >{content}</p>
        </>
    )
}

const ProductInfo = () => {
    return (
        <div className="productInfo">
            <h2>{data.title}</h2>
            <p className="price">Rs. {data.price}.00</p>

            <div className="watch-stats">
                <p>{data.watched} watched in last 24 hours</p>
                <p>{data.currentWatching} currently watching</p>
            </div>

            <button id="chatWithSeller">Chat with seller</button>

            <Accordion title="Details" Content={<AccordionContent content={data.details}/>} />

            {
                data.discriptions.map((description) => {
                    return <Accordion title={description.heading} Content={<AccordionContent content={<><p>{description.content}</p></>} />} />
                })
            }

            <Accordion title="Seller" Content={
                <>
                    <p>Name - {data.seller.name}</p>
                    <p>Rating - {data.seller.rating}</p>
                    <p><a href={data.seller.link}>View Seller</a></p>
                </>
            } />
        </div>
    )
}

function Product() {

    const [magnifierImage, setMagnifierImage] = useState("https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg");

    useEffect(() => {
        const productInfoMagnifierOutlet = document.querySelector(".product-info__magnifier-outlet");
        const productInfo = document.querySelector(".product-info")

        const temp = productInfo.getBoundingClientRect().y;

        window.addEventListener("scroll", (event) => {
            console.log(window.scrollY, productInfo.getBoundingClientRect().y)
            productInfoMagnifierOutlet.style.top = window.scrollY + temp + "px";
        });
    }, [])

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
                                        tracerWidth="100px" 
                                        tracerHeight="100px" 
                                        magnifier={4} 
                                        src={magnifierImage}
                                    />
                                    <div className="gallery">
                                        <ul>
                                            {data.images.map((imageLink) => {
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
                                    <ImageViewerCarousel images={data.images} height="600px"/>
                                </div>
                            </div>
                            <div className="product-info" >
                                <div className="product-info__magnifier-outlet">
                                    <ImageViewerMagnifierOutlet/>
                                </div>
                                <div className="product-info__info">
                                    <ProductInfo/>
                                </div>
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