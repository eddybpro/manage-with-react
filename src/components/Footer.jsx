import "./Footer.css";
import { Logo } from "../assets";
import { IconContext } from "react-icons";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmail = () => {
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <footer>
      <div className="FormBox">
        <label htmlFor="email" className="FormBox-Label">
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Updates in your inbox..."
            className="FormBox-Input"
          />
          {error && <p className="error">Please insert a valid email</p>}
        </label>
        <button className="FormBox-Btn" onClick={handleEmail}>
          go
        </button>
      </div>
      <div className="FooterLinks">
        <ul>
          <li className="FooterLinks-Link">
            <a href="#">home</a>
          </li>
          <li className="FooterLinks-Link">
            <a href="#">pricing</a>
          </li>
          <li className="FooterLinks-Link">
            <a href="#">products</a>
          </li>
          <li className="FooterLinks-Link">
            <a href="#">about us</a>
          </li>
        </ul>
        <ul>
          <li className="FooterLinks-Link">
            <a href="#">careers</a>
          </li>
          <li className="FooterLinks-Link">
            <a href="#">community</a>
          </li>
          <li className="FooterLinks-Link">
            <a href="#">privacy policy</a>
          </li>
        </ul>
      </div>
      <ul className="SocialIcons">
        <li>
          <a href="#" aria-label="facebook">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaFacebookSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="youtube">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaYoutubeSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="twitter">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="pinterest">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaPinterest />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="instagram">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      <a href="#" className="FooterLogo" aria-label="manage">
        <img src={Logo} alt="" />
      </a>
      <p className="Copyright">Copyright 2023. ALL Rights Reserved</p>
    </footer>
  );
}
export default Footer;
