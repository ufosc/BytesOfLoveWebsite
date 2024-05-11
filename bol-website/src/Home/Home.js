import {useNavigate} from "react-router-dom";
import "./Home.css"
import Navbar from "../Navbar/Navbar" 

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page-container">
            <Navbar />

            <div className="picture-carousel">
                <div className="temp-centered-text">Game opening screen</div>
            </div>

            <div className="picture-carousel">
            <div className="temp-centered-text">Picture carousel</div>
            </div>

            <div className="download-title">
                How to Download
            </div>

            <div className="download-links-box">
                <div className="download-line">
                    <div className="os-type">Mac</div>
                    <div className="download-button">Download</div>
                </div>

                <div className="download-line">
                    <div className="os-type">Linux</div>
                    <div className="download-button">Download</div>
                </div>

                <div className="download-line">
                    <div className="os-type">Windows</div>
                    <div className="download-button">Download</div>
                </div>
            </div>

        </div>
    )
} 

export default Home