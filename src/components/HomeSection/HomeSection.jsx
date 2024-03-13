import "./HomeSection.css";

function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm Emiliano</h1>
        <h3>Software Tester</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          excepturi minus maiores at, qui iure placeat. Voluptatem doloribus
          fuga nam quod sequi quo perspiciatis repellat illo, iure, voluptates
          explicabo esse!
        </p>
        <div className="btn-box">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/emiliano-maristan-aguilar-4206251ba"
          >
            LinkedIn
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="home-sci">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/emiliano-maristan-aguilar-4206251ba"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/emimaristan">
          <i className="bx bxl-instagram"></i>
        </a>
        <a target="_blank" href="https://github.com/emimaristan">
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </section>
  );
}

export default HomeSection;
