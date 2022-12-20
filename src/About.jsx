import { NavLink, useNavigate } from "react-router-dom";
import Common from "./Common";
const About = () => {
  let nevigate = useNavigate();
  let gotocontact = () => {
    nevigate("/contact");
  };
  return (
    <>
      <div id="about">
        <Common
          name="Welcome to About page"
          imgsrc="png/pngimg3.png"
          visit="/contact"
          btnname="contact now"
        />
      </div>
      {/* <button onClick={gotocontact}>Goto contact page ⏭️</button>
      <button onClick={()=>{nevigate(-1)}}>⏮️ Go Back </button> */}
    </>
  );
};
export default About;
