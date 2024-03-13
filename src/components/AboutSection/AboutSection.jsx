import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src="cv.jpg" alt="me" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Software Tester</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
          quidem laudantium omnis eos, possimus dolore pariatur ipsum ab animi.
          Sint sit sed voluptate repellat earum iusto quibusdam temporibus
          deserunt.
        </p>
        <div className="btn-box">
          <a href="#">Read more</a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
