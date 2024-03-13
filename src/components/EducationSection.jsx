import { useState, useEffect } from "react";
import Education from "./Education";

function EducationSection() {
  const [educationType, setEducationType] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/education/types")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEducationType(data.data);
      });
  }, []);

  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Education</span>
      </h2>

      <div className="education-row">
        {educationType.map((type) => (
          <div key={type} className="education-column">
            <h3 className="title">{type}</h3>
            <div className="education-box">
              <Education type={type} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
