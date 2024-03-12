import { useState, useEffect } from 'react';

function Skill(props) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/skills')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSkills(data.data.filter(function(item){
            return item.type == props.type;         
        }));
      });
  }, []);

  return (
    skills.map((skill) => (
        <div key={skill._id} className="progress">
            <h3>{skill.technology}
                <span>{skill.level}</span>
            </h3>
        </div>
    )) 
  );
}

export default Skill;
