import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import './app.css'
import "./design_system/typography/typography.css"
import Footer from "./layout/footer/footer";

function App() {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/18b6024cfd.js" crossorigin="anonymous"></script>
            </Helmet>
            <div style={{height: "100px"}}></div>
            <Outlet/>
            <Footer></Footer>
        </>
    )
}

export default App;