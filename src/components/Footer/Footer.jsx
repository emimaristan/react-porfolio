import "./Footer.css";

function Footer() {
  // ANIMATION FOOTER ONSCROLL
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Emiliano Maristan</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
