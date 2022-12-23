let Alert = (props) => {
  return (
    props.salert && (
      <div className={`alert alert-${props.salert.type} alert-dismissible fade show col-10 col-md-8 col-lg-6 m-auto`} >
        <strong>{props.salert.type}</strong> : {props.salert.msg}
      </div>
    )
  );
};
export default Alert;
