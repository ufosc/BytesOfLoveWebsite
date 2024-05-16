import {useNavigate} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container flex flex-row justify-between w-full border-b-2 border-custom-purple">
            <img src="https://docs.ufosc.org/img/logo.png" class="ml-4 w-12 h-12 items-left justify-left cursor-pointer" onClick={ () => window.open('https://ufosc.org/', '_blank')}/>
            <div class="flex justify-end flex-grow items-center">
            <div className="header-option-container" onClick={() => {navigate(`/`)}}>
                <div className="header-option-text">Home</div>
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/download`)}}>
                <div className="header-option-text">Download</div>
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/about`)}}>
                <div className="header-option-text">About</div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
