import { useEffect } from "react";
import "./imageViewer.css"

const ImageViewer = () => {

    useEffect(() => {
        const imageViewerImgContainer = document.querySelector(".imageViewer__image-container");
        const tracer = document.querySelector(".imageViewer__tracer");
        const outletImg = document.querySelector(".ImageViewer__outlet img");

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
            const coords = getCoords(imageViewerImgContainer);

            // if(event.pageY >= (coords.top) && event.pageY <= (coords.top + tracer.offsetHeight/2) ) {
            //     console.log("Hello")
            // }

            if(event.pageX >= coords.left && event.pageX <= coords.left+tracer.offsetWidth/2) {
                tracer.style.left = 0 + "px";
            } 
            
            if (event.pageX >= coords.right-tracer.offsetWidth/2 && event.pageX <= coords.right) {
                tracer.style.left = coords.right - coords.left - tracer.offsetWidth + "px";
            }

            if(event.pageY >= coords.top && event.pageY <= coords.top+tracer.offsetHeight/2) {
                tracer.style.top = 0 + "px";
            } 
            
            if (event.pageY >= coords.bottom-tracer.offsetHeight/2 && event.pageY <= coords.bottom) {
                tracer.style.top = coords.bottom - coords.top  - tracer.offsetHeight + "px";
            }

        }

        const onMouseMove = (event) => {
            const coords = getCoords(imageViewerImgContainer);

            if(((event.pageX + tracer.offsetWidth/2) <= coords.right) && ((event.pageX - tracer.offsetWidth/2) >= coords.left)) {
                tracer.style.left = event.pageX - tracer.offsetWidth / 2 - coords.left + 'px';
                outletImg.style.left = "-" + (event.pageX - tracer.offsetWidth / 2 - coords.left)*2 + 'px'
            }
            
            // (cursor Y position + half of tracer height) less than (image bottom's position)
            // (cursor Y position - half of tracer height) greater than (image top's position)
            if(((event.pageY + tracer.offsetHeight/2) <= coords.bottom) && ((event.pageY - tracer.offsetHeight/2) >= coords.top)) {
                tracer.style.top = event.pageY - tracer.offsetHeight / 2 - coords.top + 'px';
                outletImg.style.top = "-" + (event.pageY - tracer.offsetHeight / 2 - coords.top)*2 + 'px';

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