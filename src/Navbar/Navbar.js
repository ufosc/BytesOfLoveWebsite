import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container flex flex-row w-full border-b-2 items-center border-custom-purple bg-[#fccbff] justify-between">
      <img
        src="https://docs.ufosc.org/img/logo.png"
        class="ml-4 w-12 h-12 items-left content-center cursor-pointer"
        onClick={() => window.open("https://ufosc.org/", "_blank")}
        alt="UF OSC Logo"
      />
      <div class="flex flex-row justify-evenly items-center sm:gap-16 px-10 gap-6">
        <div
          className="header-option-container"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <div className="header-option-text">Home</div>
        </div>

        <div
          className="header-option-container"
          onClick={() => {
            navigate(`/download`);
          }}
        >
          <div className="header-option-text">Download</div>
        </div>

        <div
          className="header-option-container"
          onClick={() => {
            navigate(`/about`);
          }}
        >
          <div className="header-option-text">About</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
