import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
let nevigate = useNavigate();

let [data,setdata] = useState({
  fullname:"",
  email:"",
  phone:"",
  massage:""
});
  let fetchdata = (e)=>{
e.preventDefault();
alert(`My name is : ${data.fullname} ,My email is : ${data.email} , My phone no. is : ${data.phone} , and I Want to Say : ${data.massage}`)
  }
  let InputEvent = (event)=>{
    const{name,value} = event.target;
    setdata((previousData)=>{
      return{...previousData,[name]:value};
    })
  }
  return (
    <>
      <h1 className="text-center text-info">Contact US</h1>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-11 mx-auto contact">
            <form onSubmit={fetchdata}>
              <div className="mb-3">
                <label form="text" className="form-label">Fullname :</label>
                <input type='text' className="form-control" id="text" placeholder="Enter your Fullname..." name="fullname" value={data.fullname} onChange={InputEvent} required/>
              </div>
              <div className="mb-3">
                <label form="email" className="form-label">Email :</label>
                <input type='email' className="form-control" id="email" placeholder="Enter your email.." name="email" value={data.email} onChange={InputEvent} required/>
              </div>
              <div className="mb-3">
                <label form="number" className="form-label">Phone no.</label>
                <input type='number' className="form-control" id="number" placeholder="Enter your number.. 91+" name="phone" value={data.phone} onChange={InputEvent}  required/>
              </div>
              <div className="mb-3">
                <label form="massage" className="form-label">Message :</label>
                <textarea className="form-control" name="massage" value={data.massage} onChange={InputEvent} placeholder="Enter your message.."></textarea>
              </div>
              <div className="mb-3">
              <button type="Submit" className="btn btn-info text-white" >Submit</button>
              </div>
            </form>
          </div>
        </div>
        <button className="btn btn-info text-white mx-3 my-0" onClick={()=>{nevigate('/')}}>⏮️ Goto Home </button> 
      </div>
    </> 
  );
};
export default Contact;
