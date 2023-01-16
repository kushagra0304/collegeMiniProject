import { useEffect } from "react";
import "./imageViewer.css"

const ImageViewer = () => {

    useEffect(() => {
        const imageViewerImgContainer = document.querySelector(".imageViewer__image-container");
        const tracer = document.querySelector(".imageViewer__tracer");

        function getCoords(elem) {
            let box = elem.getBoundingClientRect();
          
            return {
              top: box.top + window.pageYOffset,
              right: box.right + window.pageXOffset,
              bottom: box.bottom + window.pageYOffset,
              left: box.left + window.pageXOffset
            };
          }

        const mouseOver = (event) => {
            // tracer.style.left = 
            // tracer.style.left = event.pageX - tracer.offsetWidth / 2 + 'px';
            // tracer.style.top = event.pageY - tracer.offsetHeight / 2 + 'px';
        }

        const onMouseMove = (event) => {
            let coords = getCoords(imageViewerImgContainer);

            if(((event.pageX + tracer.offsetWidth/2) <= coords.right) && ((event.pageX + tracer.offsetWidth/2) >= tracer.offsetWidth)) {
                tracer.style.left = event.pageX - tracer.offsetWidth / 2 + 'px';
            }
            if(((event.pageY + tracer.offsetHeight/2) <= coords.bottom) && ((event.pageY + tracer.offsetHeight/2) >= tracer.offsetHeight)) {
                tracer.style.top = event.pageY - tracer.offsetHeight / 2 + 'px';
            }
        }

        imageViewerImgContainer.addEventListener("mouseover", mouseOver);
        imageViewerImgContainer.addEventListener("mousemove", onMouseMove);

        return () => {
            imageViewerImgContainer.removeEventListener("mouseover", mouseOver);
            imageViewerImgContainer.removeEventListener("mousemove", onMouseMove);
        }
    }, [])

    return (
        <div className="imageViewer">
            <div className="imageViewer__inner">
                <div className="imageViewer__image-container">
                    <img className="imageViewer__image" src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="" />
                </div>
                <div className="imageViewer__tracer"></div>
            </div>
        </div>
    )
}

export default ImageViewer;
