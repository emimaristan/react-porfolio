import BtnBox from "./BtnBox";
import "./HomeSection.css";
import SocialIcons from "./SocialIcons";

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
        <BtnBox />
      </div>

      <SocialIcons />
    </section>
  );
}

export default HomeSection;
