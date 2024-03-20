import "bootstrap/dist/css/bootstrap.min.css";
import RouterComponent from "./RouterComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import FooterComponent from "./layouts/FooterComponent";
import PageNotFound from "./layouts/PageNotFound";

function App(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5">
            <RouterComponent />
            <FooterComponent />
            </div>
        </div>
    )
}


export default App;
