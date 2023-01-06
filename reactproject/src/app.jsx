import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import './app.css'

function App() {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/18b6024cfd.js" crossorigin="anonymous"></script>
            </Helmet>
            <Outlet/>
        </>
    )
}

export default App;