import { useEffect } from "react";
import "./imageViewerMagnifier.css"

const ImageViewerMagnifier  = ({tracerWidth, tracerHeight, magnifier, src}) => {

    useEffect(() => {
        console.log("Hello")
        const imageViewerImgContainer = document.querySelector(".imageViewerMagnifier .imageViewer__image-container");
        const imageViewerImgContainerImg = document.querySelector(".imageViewerMagnifier .imageViewer__image-container img");
        const tracer = document.querySelector(".imageViewerMagnifier .imageViewer__tracer");

        let outletImg = null
        let outlet = null

        while(outlet === null && outletImg === null) {
            outlet = document.querySelector(".ImageViewerMagnifier__outlet");
            outletImg = document.querySelector(".ImageViewerMagnifier__outlet img");
        }

        // -------------------------------------------------------------------

        tracer.style.height = tracerHeight;
        tracer.style.width = tracerWidth;

        outlet.style.height = `calc(${tracerHeight} * ${magnifier})`;
        outlet.style.width = `calc(${tracerWidth} * ${magnifier})`;

        outletImg.setAttribute("src", src)

        // -------------------------------------------------------------------

        const resizeObserver = new ResizeObserver((entries) => {
            const imageWidth = imageViewerImgContainerImg.clientWidth;
            outletImg.style.width = `calc(${imageWidth}px * ${magnifier})`;
        })

        resizeObserver.observe(imageViewerImgContainerImg);

        // -------------------------------------------------------------------

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

            tracer.setAttribute("data-state", "show")
            outlet.setAttribute("data-state", "show")
        }

        const onMouseMove = (event) => {
            const coords = getCoords(imageViewerImgContainer);

            if(((event.pageX + tracer.offsetWidth/2) <= coords.right) && ((event.pageX - tracer.offsetWidth/2) >= coords.left)) {
                tracer.style.left = event.pageX - tracer.offsetWidth / 2 - coords.left + 'px';
                outletImg.style.left = "-" + (event.pageX - tracer.offsetWidth / 2 - coords.left)*magnifier + 'px'
            }
            
            // (cursor Y position + half of tracer height) less than (image bottom's position)
            // (cursor Y position - half of tracer height) greater than (image top's position)
            if(((event.pageY + tracer.offsetHeight/2) <= coords.bottom) && ((event.pageY - tracer.offsetHeight/2) >= coords.top)) {
                tracer.style.top = event.pageY - tracer.offsetHeight / 2 - coords.top + 'px';
                outletImg.style.top = "-" + (event.pageY - tracer.offsetHeight / 2 - coords.top)*magnifier + 'px';

            }
        }

        const onMouseLeave = (_) => {
            tracer.setAttribute("data-state", "hidden")
            outlet.setAttribute("data-state", "hidden")
        }

        imageViewerImgContainer.addEventListener("mouseover", mouseOver);
        imageViewerImgContainer.addEventListener("mousemove", onMouseMove);
        imageViewerImgContainer.addEventListener("mouseleave", onMouseLeave);

        return () => {
            imageViewerImgContainer.removeEventListener("mouseover", mouseOver);
            imageViewerImgContainer.removeEventListener("mousemove", onMouseMove);
            imageViewerImgContainer.removeEventListener("mouseleave", onMouseLeave);
            resizeObserver.disconnect();
        }
    }, [src])

    return (
        <div className="imageViewerMagnifier">
            <div className="imageViewer__inner">
                <div className="imageViewer__image-container">
                    <img className="imageViewer__image" src={src} alt="" />
                </div>
                <div className="imageViewer__tracer" data-state="hidden"></div>
            </div>
        </div>
    )
}

export default ImageViewerMagnifier;
