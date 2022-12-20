import {NavLink} from 'react-router-dom'
let Card = (Props) => {
  return (
    <>
     <div className="col-md-4 col-sm-6 col-12 mx-auto card_head">
      <div className="card">
        <img src={Props.imgsrc} className="card-img-top" alt="..." />
        <div className="card_body p-3">
          <h5 className="card-title fw-bold">{Props.title}</h5>
          <p className="card-text">
            some quick example thext to build on the card title and make up the
            bulk of the card's content
          </p>
          <NavLink to="" className="btn btn-info text-white">
            Go some where
          </NavLink>
        </div>
      </div>
      </div>
    </>
  );
};
export default Card;
