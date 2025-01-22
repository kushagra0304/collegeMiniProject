import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import './app.css'
import "./design_system/typography/typography.css"
import Footer from "./layout/footer/footer";
import Nav from "./components/nav/nav"
import Product from "./routes/product";

function App() {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/18b6024cfd.js" crossorigin="anonymous"></script>
            </Helmet>
            <Nav></Nav>
            <Product />
            <Footer></Footer>
        </>
    )
}

export default App;