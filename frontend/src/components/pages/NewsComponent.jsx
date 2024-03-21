import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function NewsComponent(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5">
            <h1>News Component</h1>
            <FooterComponent />
            </div>
        </div>
    )
}

export default NewsComponent;