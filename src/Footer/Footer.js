import {useNavigate} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div id="footerBar">
            <div>
                {/* <h2 id="footerTitle">Bytes of Love</h2> */}
                <img id="footerImage" src="BoL Logo Edited.png"></img>
            </div>

            <div id="socials">
                <a href="https://github.com/ufosc/BytesOfLoveWebsite">
                    <img src="images/github_logo.png" id="githubLogo"></img>
                </a>
            </div> 
        </div>
        // <div className="header-container flex flex-row justify-between w-full border-b-2 border-custom-purple">
        //     <img src="https://docs.ufosc.org/img/logo.png" class="ml-4 w-12 h-12 items-left justify-left cursor-pointer" onClick={ () => window.open('https://ufosc.org/', '_blank')}/>
        //     <div class="flex justify-end flex-grow items-center">
        //     <div className="header-option-container" onClick={() => {navigate(`/`)}}>
        //         <div className="header-option-text">Home</div>
        //     </div>

        //     <div className="header-option-container" onClick={() => {navigate(`/download`)}}>
        //         <div className="header-option-text">Download</div>
        //     </div>

        //     <div className="header-option-container" onClick={() => {navigate(`/about`)}}>
        //         <div className="header-option-text">About</div>
        //     </div>
        //     </div>
        // </div>
    )
}

export default Footer
