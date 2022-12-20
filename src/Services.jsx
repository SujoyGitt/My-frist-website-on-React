import { NavLink, useNavigate } from "react-router-dom";
import Card from "./card";
import Sdata from "./Sdata";
const Services = () => {
  let nevigate = useNavigate();
  return (
    <>
      <div className="services">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid my-3 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((value, index) => {
                return (
                  <Card key={index} imgsrc={value.imgsrc} title={value.title} />
                );
              })}
            </div>
          </div>
        </div>
          <NavLink to='/about' className='btn btn-info text-white my-4'>➡️ About us ↪️</NavLink>
          <button className="btn btn-info text-white mx-3 my-0" onClick={()=>{nevigate(-1)}}>⏮️ Go Back </button> 
      </div>
    </>
  );
};
export default Services;
