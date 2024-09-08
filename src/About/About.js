import { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "../Home/Home.css";
import "./About.css";

const About = () => {
  const [isMuted, setIsMuted] = useState(false); // Initialize as muted
  const audioRef = useRef(null); // Ref for the audio element
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  

  

  return (
    <div className="about-page-container">
      <Navbar />

      <div className="credit-row-title">Artists</div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/tyra-pasion/"
          target="_blank"
        >
          <img src="credits/Tyra.jpg" alt="Tyra Picture" />
          <div className="credit-name">Tyra Pasion</div>
          <div className="credit-title">Lead Artist</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/ryder-keeny/"
          target="_blank"
        >
          <img src="credits/Ryder.jpg" alt="Ryder Picture" />
          <div className="credit-name">Ryder Keeny</div>
          <div className="credit-title">UI/UX Lead</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/gef5027/"
          target="_blank"
        >
          <img src="credits/Gianna.jpg" alt="Gianna Picture" />
          <div className="credit-name">Gianna Fernandez</div>
          <div className="credit-title">Background Artist</div>
        </a>
      </div>

      <div className="credit-row-title">Writers</div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/wilson-goins/"
          target="_blank"
        >
          <img src="credits/Wilson.jpg" alt="Wilson Picture" />
          <div className="credit-name">Wilson Goins</div>
          <div className="credit-title">Lead Writer</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/edward-roshko/"
          target="_blank"
        >
          <img src="credits/Eddy.jpg" alt="Eddy Picture" />
          <div className="credit-name">Edward Roshko</div>
          <div className="credit-title">Script Writer</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/sarah-tran1029/"
          target="_blank"
        >
          <img src="credits/Sarah.jpg" alt="Sarah Picture" />
          <div className="credit-name">Sarah Tran</div>
          <div className="credit-title">Script Editor</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/tikiri-ekanayake/"
          target="_blank"
        >
          <img src="credits/Tikiri.jpg" alt="Tikiri Picture" />
          <div className="credit-name">Tikiri Ekanayake</div>
          <div className="credit-title">Script Editor</div>
        </a>
      </div>

      <div className="credit-row-title">Developers</div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/xael-font/"
          target="_blank"
        >
          <img src="credits/Lazzy.jpg" alt="Lazzy Picture" />
          <div className="credit-name">Xael Font</div>
          <div className="credit-title">Lead Ren'Py Developer</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/antoncsalvador/"
          target="_blank"
        >
          <img src="credits/Anton.jpg" alt="Anton Picture" />
          <div className="credit-name">Anton Salvador</div>
          <div className="credit-title">Senior Developer</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/jason-lin-66b906254/"
          target="_blank"
        >
          <img src="credits/Jason.jpg" alt="Jason Picture" />
          <div className="credit-name">Jason Lin</div>
          <div className="credit-title">Senior Developer</div>
        </a>
      </div>

      <div className="credit-row-title">Project Managers</div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/jwmalegni/"
          target="_blank"
        >
          <img src="credits/Jake.jpg" alt="Jake Picture" />
          <div className="credit-name">Joseph Malegni</div>
          <div className="credit-title">Project Lead</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/nicolasvaliente/"
          target="_blank"
        >
          <img src="credits/Nick.jpg" alt="Nick Picture" />
          <div className="credit-name">Nicolas Valiente</div>
          <div className="credit-title">Senior Project Manager</div>
        </a>
      </div>

      <div className="credit-row-title">Special Thanks</div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/mathewalangadan/"
          target="_blank"
        >
          <img src="credits/Mathew.jpg" alt="Mathew Picture" />
          <div className="credit-name">Mathew Alangadan</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/kanielv/"
          target="_blank"
        >
          <img src="credits/Kaniel.jpg" alt="Kaniel Picture" />
          <div className="credit-name">Kaniel Vicencio</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/mohammedali0/"
          target="_blank"
        >
          <img src="credits/Mohammed.jpg" alt="Mohammed Picture" />
          <div className="credit-name">Mohammed Ali</div>
        </a>
      </div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/josephcabezas/"
          target="_blank"
        >
          <img src="credits/Joey.jpg" alt="Joey Picture" />
          <div className="credit-name">Joseph Cabezas</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/in/jonathanamesa/"
          target="_blank"
        >
          <img src="credits/Mesa.jpg" alt="Mesa Picture" />
          <div className="credit-name">Jonathan Mesa</div>
        </a>

        <a
          className="credit-cell"
          href="https://www.linkedin.com/company/open-source-club/mycompany/"
          target="_blank"
        >
          <img src="https://docs.ufosc.org/img/logo.png" />
          <div className="credit-name">UF Open Source Club</div>
        </a>
      </div>

      <div className="credit-row-title">Music</div>
      <div className="credit-row">
        <a
          className="credit-cell"
          href="https://dova-s.jp/bgm/play20356.html"
          target="_blank"
        >
          <img src="credits/Shimtone.jpg" alt="Shimtone Music" />
          <div className="credit-name">Shimtone - シムトーン</div>
          <div className="credit-title">Menu Music </div>
        </a>
      </div>

      <div className="thankyou-box">
        <div className="credit-name">
          Thank you to everyone who contributed to Bytes of Love, including
          those whose names may not have been mentioned. This is an open source
          visual novel so anyone is welcome to help! LGTM.
        </div>
      </div>

      

      
    </div>
  );
};

export default About;
