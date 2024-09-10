import React from "react";
import mock01 from '../assets/images/ring.png';
import mock02 from '../assets/images/mtgr.png';
import mock03 from '../assets/images/gwent.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://gradechelor.hesge.ch/api/studentFiles/2120/ISC_LO_memoire_diplome_Paulot_Pascal_2022.pdf" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gradechelor.hesge.ch/api/studentFiles/2120/ISC_LO_memoire_diplome_Paulot_Pascal_2022.pdf" target="_blank" rel="noreferrer"><h2>3D metal object appraiser</h2></a>
                <p>Development of a scenario management system with a user interface allowing users to interact with 3D objects with React, Node and MongoDB.</p>
            </div>
            <div className="project">
                <a href="https://mtgr-1.onrender.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mtgr-1.onrender.com/" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Developed a web app for an MTG Association to manage it's members, tournaments... with Next.js, Node and MongoDB.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Gwent remade in Unity</h2></a>
                <p>Developing a recreation of the Gwent card game using Unity.</p>
            </div>
            {/* <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;