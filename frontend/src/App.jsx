import "bootstrap/dist/css/bootstrap.min.css";
import RouterComponent from "./RouterComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import FooterComponent from "./layouts/FooterComponent";
import PageNotFound from "./layouts/PageNotFound";

function App(){
    return(
        <div className="container">
            <h1>News Website</h1>
            <HeaderComponent />
            <hr></hr>
            <RouterComponent />
            <FooterComponent />
        </div>
    )
}


export default App;
