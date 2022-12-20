import { useLocation, useNavigate, useParams } from "react-router-dom";

let User = () => {
  let { fnamed, lname } = useParams();
  let location = useLocation();
 let history = useNavigate();
  return (
    <>
      <h1>User {fnamed} {lname} Page</h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/user/Sujoy/Ghosal` ? (
        <button onClick={()=>{history('/')}}>Home Page</button>
      ) : null}
    </>
  );
};
export default User;
