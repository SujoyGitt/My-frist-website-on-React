import { useNavigate } from "react-router-dom";

let Error = ()=>{
    let nevigate = useNavigate();

    return(
        <>
           <div className="setStyleerror">
            <h1>404 </h1>
            <h3>Error Page</h3>
            <p>Sorry on this page not valid</p>
            <button onClick={()=>nevigate('/')}>Go back Home</button>
           </div>
        </>
    )
}
export default Error;