import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/Aramide 2.jpg"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Aramide Adebesin</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:adebesinaramide@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://drive.google.com/file/d/1zfo1qMiF0SwVEHC4IYKH-d2EmVARPGu3/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/Adebesin-Aramide" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aramide-adebesin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/hara__myde" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        
          <p>
            I am Aramide Adebesin, a graduate of Mathematics from Obafemi Awolowo University, Ile-Ife, Nigeria, and an independent researcher at 
            <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer"> ML Collective</a>, 
            an open science community for self-driven AI researchers. 
            I am passionate about leveraging machine learning to address challenges in healthcare, particularly in resource-constrained environments.
          </p>

          <p>
            My research interests include Computer Vision, Natural Language Processing and its applications in healthcare. I am dedicated to advancing AI technologies that can improve healthcare outcomes and accessibility for underserved populations.
          </p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;