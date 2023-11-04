import "./Header.css";
import { Illustration } from "../assets";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-ImgBox">
          <img src={Illustration} alt="" />
        </div>
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            Bring everyone together to build better products.
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="HeaderWrapper-TxtBox-Btn">Get Started</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
