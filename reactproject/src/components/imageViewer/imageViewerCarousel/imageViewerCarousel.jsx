import { useEffect } from "react";
import "./imageViewerCarousel.css"


const ImageViewerCarousel = ({ images }) => {

    useEffect(() => {
        const inner =  document.querySelector(".imageViewerCarousel .imageViewer__inner")
        let img = document.querySelector(".imageViewerCarousel img");
        const prevBtn = document.querySelector(".imageViewerCarousel .prev");
        const nextBtn = document.querySelector(".imageViewerCarousel .next")

        const observer = new IntersectionObserver(function(entries) {
            for(let i = 0; i < entries.length; i++) {
                if(entries[i].isIntersecting === true && (Math.round(entries[i].intersectionRatio * 10) / 10)== 0.9) {
                    img = entries[i].target;
                }
            }

        }, { threshold: [0.9], root: inner });
        
        let temp = img;
        while(temp !== null){
            observer.observe(temp);
            temp = temp.nextElementSibling;
        }

        const prevImage = () => {
            inner.scrollLeft = img.previousElementSibling.offsetLeft;
        }

        const nextImage = () => {
            inner.scrollLeft = img.nextElementSibling.offsetLeft;
        }

        prevBtn.addEventListener("click", prevImage)
        nextBtn.addEventListener("click", nextImage)

        return () => {
            prevBtn.removeEventListener("click", prevImage);
            nextBtn.removeEventListener("click", nextImage);
            observer.disconnect();
        }
    }, [])

    return (
        <>
            <div className="imageViewerCarousel">
                <div className="imageViewer__inner">
                    {
                        images.map((image) => {
                            return (
                                <>
                                    <img src={image} alt="" />
                                </>
                            )
                        })
                    }
                </div>
                <button className="prev">{"<--"}</button>
                <button className="next">{"-->"}</button>
            </div>
        </>
    )
}

export default ImageViewerCarousel;