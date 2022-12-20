import React from "react";
import './index.css';
import Common from './Common';
import servicesimg from './png/pngimg2.png'
let Home = () => {
  return (
    <>
     <Common
      name="Grow Your buisness with "
        imgsrc={servicesimg}
        visit="/services"
        btnname="Get Started"
     />
      
    </>
  );
};
export default Home;
