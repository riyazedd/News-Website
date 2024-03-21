import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

function ContactComponent(){
    return(
        <div>
            <HeaderComponent />
            <div className="container pt-5">
            <h1>Contact Component</h1>
            <FooterComponent />
            </div>
        </div>
    )
}

export default ContactComponent;