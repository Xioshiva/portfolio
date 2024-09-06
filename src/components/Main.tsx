import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import photo from '../assets/images/photo.png'; 
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={photo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Xioshiva" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alexey-paulot-a52403264/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Paulot Alexey</h1>
          <p>Junior Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Xioshiva" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alexey-paulot-a52403264/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;