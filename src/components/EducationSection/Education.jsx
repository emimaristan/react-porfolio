import { useState, useEffect } from 'react';

function Education(props) {
    const [educations, setEducation] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/education')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEducation(data.data.filter(function (item) {
                    return item.type == props.type;
                }));
            });
    }, []);

    return (
        educations.map((education) => (
            <div key={education._id} className="education-content">
                <div className="content">
                    <div className="year">
                        <i className="bx bxs-calendar"> {education.startYear} - {education.endYear}</i>
                    </div>
                    <h3>{education.title}</h3>
                    <p>{education.description}</p>
                </div>
            </div>
        ))
    );
}

export default Education