import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function AboutComponent(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5">
            <h1>About Component</h1>
            <FooterComponent />
            </div>
        </div>
    )
}

export default AboutComponent;