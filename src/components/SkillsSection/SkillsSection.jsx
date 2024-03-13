import { useState, useEffect } from "react";
import Skill from "./Skill";
import "./SkillsSection.css";

function SkillsSection() {
  const [skillType, setSkillType] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/skills/types")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSkillType(data.data);
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        {skillType.map((type) => (
          <div key={type} className="skills-column">
            <h3 className="title">{type} Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <Skill type={type} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
