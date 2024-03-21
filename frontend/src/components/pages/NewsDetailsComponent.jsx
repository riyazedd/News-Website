import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function NewsDetailsComponent(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5">
            <h1>News Details Component</h1>
            <FooterComponent />
            </div>
        </div>
    )
}

export default NewsDetailsComponent;