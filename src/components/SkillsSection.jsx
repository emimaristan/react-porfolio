import React from "react";

function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  JavaScript <span>Advanced</span>
                </h3>
              </div>

              <div className="progress">
                <h3>
                  HTML <span>Advanced</span>
                </h3>
              </div>

              <div className="progress">
                <h3>
                  CSS <span>Advanced</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  JavaScript <span>Advanced</span>
                </h3>
              </div>

              <div className="progress">
                <h3>
                  HTML <span>Advanced</span>
                </h3>
              </div>

              <div className="progress">
                <h3>
                  CSS <span>Advanced</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
