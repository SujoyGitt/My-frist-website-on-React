import { NavLink, useNavigate } from "react-router-dom";
import Common from "./Common";
import aboutimg from './png/pngimg3.png';
const About = () => {
  let nevigate = useNavigate();
  return (
    <>
      <div id="about">
        <Common
          name="Welcome to About page"
          imgsrc={aboutimg}
          visit="/contact"
          btnname="contact now"
        />
      <button className="btn btn-info text-white mx-3 my-0" onClick={()=>{nevigate(-1)}}>⏮️ Go Back </button> 
      </div>
      {/* /* <button onClick={gotocontact}>Goto contact page ⏭️</button> */}
    </>
  );
};
export default About;
