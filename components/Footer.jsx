

const Footer = () => {
  return (
    <>
      {/* <!---Footer--> */}
      <footer>
        <p>Ezie Innocent Portfolio</p>
        <p> Client&apos;s satisfaction is our primary goal.</p>
        {/* <!---social--> */}
        <div className="social-icons">
          <a href="https://facebook.com/innocentchukwudi.ezie">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/eminentpal">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/eminent_pal">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        {/* <!--Copyright--> */}
        <p className="copyright">
          Copyright <span className="fa fa-copyright"></span> 2022 | Ezie
          Innocent
        </p>
      </footer>

      {/* <!---attached social to bar--> */}
      <div className="a-social-b">
        <a href="https://facebook.com/innocentchukwudi.ezie">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/eminentpal">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/eminent_pal">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
