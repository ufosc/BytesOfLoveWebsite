import {useNavigate} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <div className="header-option-container" onClick={() => {navigate(`/download`)}}>
                <div className="header-option-text">Download</div>
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/`)}}>
                <div className="header-option-text">Home</div>
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/about`)}}>
                <div className="header-option-text">About</div>
            </div>
        </div>
    )
}

export default Navbar