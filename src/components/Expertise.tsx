import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faUnity, faWizardsOfTheCoast } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Python",
    "MongoDB",
    "Postman",
    "Git",
    "Docker",
    "GCP",
    "Linux"
];

const labelsSecond = [
    "Unity",
    "C#",
    "Blender"

];

const labelsThird = [
    "Problem Solving",
    "Adaptability",
    "Analytical Skills",
    "Competitive Mindset",
    "Pressure Management"

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built multiple web applications from scratch using modern technologies such as React. Once the application is built, I set up CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUnity} size="3x"/>
                    <h3>Game Development</h3>
                    <p>I developed small games in Unity to hone my C# skills, applying object-oriented programming principles in a creative context and enhancing my problem-solving abilities through hands-on projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWizardsOfTheCoast} size="3x"/>
                    <h3>Strategic Thinking Through Competitive Play</h3>
                    <p>As a semi-professional Magic: The Gathering player with over $50,000 in winnings, I honed strategic thinking, performing under pressure, and problem-solving skills, which I now apply to development projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;