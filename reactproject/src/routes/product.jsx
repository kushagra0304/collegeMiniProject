import ImageViewer from "../components/imageViewer/imageViewer"

function Product() {
    return (
        <>
            <div className="product">
                <header className="product__header"></header>
                <main className="product__inner">
                    <div className="product__details">
                        <div className="product-viewer">
                            <div></div>
                            <ImageViewer />
                        </div>
                        <div className="product-info">
                            <div className="ImageViewer__outlet">
                                <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="" />
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