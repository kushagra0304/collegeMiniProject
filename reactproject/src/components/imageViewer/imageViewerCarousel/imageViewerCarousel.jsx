import "./imageViewerCarousel.css"

const ImageViewerCarousel = ({ images }) => {
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
            </div>
        </>
    )
}

export default ImageViewerCarousel;