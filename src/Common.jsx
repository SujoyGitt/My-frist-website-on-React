import {NavLink} from 'react-router-dom'
let Common = (props)=>{
    return(
        <>
       <section id="home_header" className="d-flex align-items-center ">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-10 mx-auto">
              <div className="row  align-items-center">
              <div className="col-sm-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>{props.name} <strong className="Brand_name">Sujoy Ghosal</strong></h1>
                <h5 className="my-3">We are the team talented devoloper making website</h5>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-stated">{props.btnname}</NavLink>
                  <NavLink to='My resume on november.pdf' target='blank' className="btn-get-stated ms-0 ms-sm-3 mt-3 mt-md-0 mb-3 mb-sm-0">Download my resume</NavLink>
                </div>
              </div>
              <div className="col-sm-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid home_img_animated" alt='home_img'/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
};
export default Common;
