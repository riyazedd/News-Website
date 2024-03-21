import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function HomeComponent(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5">
            <h1>Home Component</h1>
            <FooterComponent />
            </div>
        </div>
    )
}

export default HomeComponent;