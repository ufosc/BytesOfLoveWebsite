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
                <div class="flex w-3/12 items-center justify-center">
                    <div class="text-2xl m-4 w-1/2 text-center">Mac</div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a href="https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9">Download</a>
                    </button>
                </div>

                <div class="flex w-3/12 items-center justify-center">
                    <div class="text-2xl m-4 w-1/2 text-center">Linux</div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a href="https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9">Download</a>
                    </button>
                </div>

                <div class="flex w-3/12 items-center justify-center">
                    <div class="text-2xl m-4 w-1/2 text-center">Windows</div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a href="https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9">Download</a>
                    </button>
                </div>
            </div>

        </div>
    )
} 

export default Home
