import {useNavigate} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <div className="header-option-container" onClick={() => {navigate(`/download`)}}>
                Download
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/`)}}>
                Home
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/about`)}}>
                About
            </div>
        </div>
    )
}

export default Navbar