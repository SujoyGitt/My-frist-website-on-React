let Footer = () => {
  let year = new Date().getFullYear;
  return (
    <>
      <footer className="bg-light text-center ">
        <p>
          Copy Right ©️ {year} Sujoy Ghosal. All Right Reserved | Terms and
          Conditions.
        </p>
      </footer>
    </>
  );
};
export default Footer;
