import { useEffect } from "react";
import "./index.css";

import HomeSection from "./components/HomeSection/HomeSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import EducationSection from "./components/EducationSection/EducationSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navlinks = document.querySelectorAll("header nav a");

    const onScroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navlinks.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });

      //STICKY HEADER
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
